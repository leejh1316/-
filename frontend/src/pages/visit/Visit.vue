<script setup lang="ts">
import BaseBack from '@/components/base/BaseBack.vue';
import BaseTitle from '@/components/base/BaseTitle.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import { reactive, ref} from 'vue';
import {VisitEntity, VisitForm} from '@model/visit'
import {Contact} from '@model/contact'
import BaseButton from '@/components/base/BaseButton.vue';
import BaseCard from '@/components/base/BaseCard.vue';
import ContactSearch from '@/components/search/ContactSearch.vue';
import useVisitDummy from '@dummy/useVisitDummy'
import BaseSpinner from '@components/base/BaseSpinner.vue'
import router from '@/router';
const form = reactive<VisitEntity>({} as VisitEntity)
const contact = ref<Contact>({} as Contact)
const contactSearchOpen = ref<boolean>(false)
const visitDummy = useVisitDummy()
const handleContact = (data:Contact) => {
    contact.value = data;
    form.contactInfoId = data.contactInfoId;
}

const handleCompletedClick = () => {
    form.applicationId = visitDummy.visit.length-1;
    form.approvalStatus = '대기'
    visitDummy.visit.push(form)
    state.value = '작성등록중'
    setTimeout(()=>state.value = '작성완료', 400)
}
const state = ref<"작성중" | "작성등록중" |"작성완료">('작성중')
</script>
<template>
    <div class="visit-page">
        <template v-if="state==='작성중'">
            <BaseBack></BaseBack>
            <BaseTitle :title="'방문신청 서비스'" :content="['원하는 담당자를 선택하여', '방문 서비스를 받아보세요.']"></BaseTitle>
            <div class="visit-form">
                <BaseInput :label="'이름'" v-model:value="form.name"></BaseInput>
                <BaseInput :label="'생년월일'" v-model:value="form.birthday" :type="'date'"></BaseInput>
                <BaseInput :label="'전화번호'" v-model:value="form.phoneNumber"></BaseInput>
                <BaseInput :label="'방문시작날짜'" v-model:value="form.startDate" :type="'date'"></BaseInput>
                <BaseInput :label="'방문종료날짜'" v-model:value="form.endDate" :type="'date'"></BaseInput>
                <div class="row">
                    <BaseInput class="contact-name" :label="'담당자'" v-model:value="contact.name" :disabled="true"></BaseInput>
                    <div class="contact-search">
                        <BaseButton  :stroke="true" @click="contactSearchOpen = true">담당자 검색</BaseButton>
                    </div>
                </div>
                <BaseInput :label="'방문목적'" v-model:value="form.purpose"></BaseInput>
                <BaseButton @click="handleCompletedClick">작성완료</BaseButton>
            </div>
        </template>
        <template v-else-if="state==='작성등록중'">
            <div class="center">
                <BaseSpinner/>
            </div>
        </template>
        <template v-else>
            <div class="center">
                <BaseCard :title="'신청성공'" :contents="['신청에 성공했습니다.', '메인화면으로 돌아가시겠습니까?']" :btn-content="'메인화면 돌아가기'" :move-name="'main'"> </BaseCard>
            </div>
        </template>
        <ContactSearch v-model:open="contactSearchOpen" @contact="handleContact"></ContactSearch>
    </div>
</template>
<style scoped lang="scss">
.visit-form{
    display: flex;
    flex-direction: column;
    gap:36px;
}
.row{
    display: flex;
    gap:8px;
}
.contact-name{
    flex-basis: 60%;
}
.contact-search{
    flex-grow: 1;
}
.center{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
