<script setup lang="ts">
import BaseBack from '@/components/base/BaseBack.vue';
import BaseTitle from '@/components/base/BaseTitle.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import { computed, reactive, ref} from 'vue';
import {VisitEntity, VisitForm} from '@model/visit'
import BaseButton from '@/components/base/BaseButton.vue';
import useVisitDummy from '@/dummy/useVisitDummy';
import BaseSpinner from '@/components/base/BaseSpinner.vue';
import router from '@/router';
const form = reactive<VisitForm>({} as VisitForm)
const visitDummy = useVisitDummy()



const state = ref<'인증대기'|'인증중'|'인증실패'|'인증됨'>('인증대기')
const findedUser = ref<VisitEntity>()

const approvalColor = computed(()=>{
    if(findedUser.value.approvalStatus === '승인') return 'primary'
    else if(findedUser.value.approvalStatus === '대기') return 'content'
    else return 'error'
})

const handleCheck = () => {
    state.value= '인증중'
    console.log(visitDummy.visit)
    setTimeout(()=>{
        const find = visitDummy.visit.find((visit)=>visit.phoneNumber === form.phoneNumber && visit.name === form.name)
        console.log(find)
        state.value = find ? '인증됨' : '인증실패';
        if(state.value === '인증됨'){
            findedUser.value = {...find}
        }
        if(state.value === '인증실패') setTimeout(()=>state.value='인증대기', 1000)
    },600)
}
</script>
<template>
    <div class="approval-page">
        <BaseBack></BaseBack>
        <template v-if="state !== '인증됨'">
            <BaseTitle :title="'방문신청 정보 확인'" :content="['이름과 전화번호를 입력하여', '방문 신청 상태를 확인하세요']"></BaseTitle>
            <div class="approval-form">
                <BaseInput :label="'이름'" v-model:value="form.name"></BaseInput>
                <BaseInput :label="'전화번호'" v-model:value="form.phoneNumber"></BaseInput>
                <BaseButton @click="handleCheck" :stroke-important="state==='인증중' || state==='인증실패'">
                    <span v-if="state==='인증대기'">정보 확인하기</span>
                    <span v-else-if="state==='인증중'"><BaseSpinner/></span>
                    <span v-else-if="state==='인증실패'">등록되지 않은 정보입니다.</span>
                </BaseButton>
            </div>
        </template>
        <template v-else>
            <div class="user-information">
                <div class="bold fs-20">사용자 정보</div>
                <div class="user-infos">
                    <BaseInput :label="'이름'" :value="findedUser?.name ?? ''" :disabled="true"/>
                    <BaseInput :label="'전화번호'" :value="findedUser?.phoneNumber ?? ''" :disabled="true"/>
                    <BaseInput :label="'방문시작날짜'" :value="findedUser?.startDate ?? ''" :disabled="true"/>
                    <BaseInput :label="'방문종료날짜'" :value="findedUser?.endDate ?? ''" :disabled="true"/>
                    <div class="row">
                        <div class="fs-18px content-name">상태: </div>
                        <div class="user-approval" :data-status="approvalColor">{{ findedUser.approvalStatus }}</div>
                    </div>
                </div>
                <BaseButton @click="router.back()" :stroke="true">메인으로 돌아가기</BaseButton>
            </div>
        </template>
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
    animation: both 0.3s ease fade-in;
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
@keyframes fade-in {
    0%{
        opacity: 0;
        transform: translateY(50px);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
