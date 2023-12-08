<script setup lang="ts">
import router from "@/router";
import BaseButton from "./BaseButton.vue";

const props = defineProps<{
  title: string;
  contents: string[];
  btnContent: string;
  moveName: string;
  moveParams ?: any
}>();

const handleButtonClick = () => {
  router.push({name:props.moveName, params:props.moveParams})
};
</script>
<template>
  <div class="base-card">
    <div class="bold fs-20">{{ props.title }}</div>
    <div class="content fs-16">
      <div v-for="content of props.contents">{{ content }}</div>
    </div>
    <div>
      <BaseButton :stroke="true" @click="handleButtonClick">{{
        props.btnContent
      }}</BaseButton>
    </div>
  </div>
</template>
<style scoped lang="scss">
.base-card {
  box-sizing: border-box;
  padding: 12px 8px;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: 0.225s all ease;
  &:hover {
    transform: translateX(-2px);
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.15);
  }
}
.content {
  color: var(--content);
  word-break: keep-all;
}
</style>
