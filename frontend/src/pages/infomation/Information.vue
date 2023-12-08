<script setup lang="ts">
import BaseBack from '@/components/base/BaseBack.vue';
import BaseTitle from '@/components/base/BaseTitle.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import { computed} from 'vue';

import useContactDummy from '@/dummy/useContactDummy';
import BaseButton from '@/components/base/BaseButton.vue';
import router from '@/router';
import useVisitDummy from '@/dummy/useVisitDummy';

import useAdminDummy from '@/dummy/useAdminDummy';
import { VisitApproval } from '@/model/visit';

const visitDummy = useVisitDummy()

const adminDummy = useAdminDummy()

const contactDummy = useContactDummy()
const contact = computed(()=>contactDummy.contact.find((contact)=>visitDummy.currentVisitUser.contactInfoId === contact.contactInfoId))

const approvalColor = computed(()=>{
    if(visitDummy.currentVisitUser.approvalStatus === '승인') return 'primary'
    else if(visitDummy.currentVisitUser.approvalStatus === '대기') return 'content'
    else return 'error'
})

const updateState = (state:VisitApproval) => {
    visitDummy.currentVisitUser.approvalStatus = state
}

</script>
<template>
    <div class="approval-page">
        <BaseBack></BaseBack>
        <div class="user-information">
        <BaseTitle v-if="!adminDummy.currentAdmin?.adminId" :title="'예약정보를 찾았어요.'" :content="['예약정보를 확인해주세요.']"></BaseTitle>
        <BaseTitle v-if="adminDummy.currentAdmin?.adminId" :title="'방문 상태를 변경하세요.'" :content="['상태 변경 버튼을 눌러서','방문상태를 변경할 수 있어요.']"></BaseTitle>
            <div class="bold fs-20">사용자 정보</div>
            <div class="user-infos">
                <BaseInput :label="'이름'" :value="visitDummy.currentVisitUser.name ?? ''" :disabled="true"/>
                <BaseInput :label="'전화번호'" :value="visitDummy.currentVisitUser.phoneNumber ?? ''" :disabled="true"/>
                <BaseInput :label="'방문시작날짜'" :value="visitDummy.currentVisitUser.startDate ?? ''" :disabled="true"/>
                <BaseInput :label="'방문종료날짜'" :value="visitDummy.currentVisitUser.endDate ?? ''" :disabled="true"/>
                <div class="row">
                    <div class="fs-18px content-name">상태: </div>
                    <div class="user-approval" :data-status="approvalColor">{{ visitDummy.currentVisitUser.approvalStatus }}</div>
                    <div v-if="adminDummy.currentAdmin?.adminId" class="row">                        
                            <BaseButton @click="updateState('대기')" :stroke="true">대기</BaseButton>
                            <BaseButton @click="updateState('승인')" :stroke="true">승인</BaseButton>
                            <BaseButton @click="updateState('반려')" :stroke="true">반려</BaseButton>
                    </div>
                </div>
                <div class="bold fs-20">담당자 정보</div>
                <div class="row">
                    <BaseInput :label="'이름'" :value="contact.name ?? ''" :disabled="true"/>
                    <BaseInput :label="'부서'" :value="contact.department ?? ''" :disabled="true"/>
                </div>
            </div>
            <BaseButton v-if="!adminDummy.currentAdmin?.adminId" @click="router.push({name:'main'})" :stroke="true">메인으로 돌아가기</BaseButton>
        </div>
    </div>
</template>
<style scoped lang="scss">
.approval-form{
    display: flex;
    flex-direction: column;
    gap:36px;
}
.row{
    display: flex;
    align-items: center;
    gap:8px;
}
.column{
    display: flex;
    flex-direction: column;
    gap:8px;
    align-items: center;
}
.contact-name{
    flex-basis: 60%;
}
.contact-search{
    flex-grow: 1;
}
.user-information{
    width: 392px;
    min-height: 200px;
    box-sizing: border-box;
    padding: 18px 12px;
    border-radius: 8px;
}
.user-infos{
    margin-top:32px;
    display:flex;
    flex-direction: column;
    gap:36px;
    margin-bottom:24px;
}
.user-approval{
    border-radius: 8px;
    color:white;
    padding: 8px 12px;
    &[data-status='primary']{
        background-color: var(--primary);
    }
    &[data-status='content']{
        background-color: var(--content);
    }
    &[data-status='error']{
        background-color: var(--error);
    }

}
</style>
