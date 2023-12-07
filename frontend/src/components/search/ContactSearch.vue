<script setup lang="ts">
import BaseModal from "@components/base/BaseModal.vue";
import { computed, ref, watchEffect } from "vue";
import BaseInput from "../base/BaseInput.vue";
import BaseButton from "../base/BaseButton.vue";
import useContactDummy from '@dummy/useContactDummy'
import { Contact } from "@/model/contact";
const props = defineProps<{
  open: boolean;
}>();
const emits = defineEmits<{ (e: "update:open", value: boolean), (e:'contact', value:Contact) }>();
const contactDummy = useContactDummy()
const contactName = ref<string>("");
const contactNameFilter = computed(()=> contactDummy.contact.filter((contact)=>contact.name.includes(contactName.value)))

const handleContactClick = (contact : Contact) => {
  emits('contact', contact)
  emits('update:open', false)
}
</script>
<template>
  <BaseModal :open="props.open" @close="emits('update:open', false)">
    <div class="contact-search-container">
      <div class="header row">
        <div class="title fs-20 bold">담당자 찾기</div>
        <div class="close-icon" @click="emits('update:open', false)"><Icon :icon="'fa-close'"></Icon></div>
      </div>
      <div class="search">
        <BaseInput
          class="search-input"
          :label="'담당자 이름'"
          v-model:value="contactName"
        ></BaseInput>
        <div class="search-button">
          <BaseButton :stroke="true">검색</BaseButton>
        </div>
      </div>
      <div class="search-view">
        <div v-for="contact of contactNameFilter" class="contact-container" @click="handleContactClick(contact)">
          <div class="department fs-14">{{contact.department}}</div>
          <div class="bold fs-16">{{contact.name}}</div>
        </div>
      </div>
    </div>
  </BaseModal>
</template>
<style scoped lang="scss">
.contact-search-container {
  border-radius: 8px;
  background-color: #fff;
  max-width: 397px;
  max-height: 500px;
  height:100%;
  width: 100%;
  box-sizing: border-box;
  padding: 24px 12px;
}
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
  .close-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
  }
}
.search {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  .search-input {
    flex-basis: 80%;
  }
  .search-button {
    flex-grow: 1;
  }
}
.search-view{
  display: flex;
  flex-direction: column;
  gap:12px;
}
.contact-container{
  background-color: #fff;
  border-radius: 8px;
  transition: 0.225s all ease;
  padding: 8px 12px;
  &:hover{
    transform: translateX(-2px);
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
  }
  .department{
    color:var(--content)
  }
}
</style>
