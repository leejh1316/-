<script setup lang="ts">
import BaseBack from '@/components/base/BaseBack.vue';
import BaseTitle from '@/components/base/BaseTitle.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import {computed, onMounted, reactive, ref, watch} from 'vue';
import {VisitForm} from '@model/visit'
import {AdminEntity} from '@model/admin'
import BaseButton from '@/components/base/BaseButton.vue';
import useVisitDummy from '@/dummy/useVisitDummy';
import BaseSpinner from '@/components/base/BaseSpinner.vue';
import router from '@/router';
import useAdminDummy from '@dummy/useAdminDummy'

console.log(router.currentRoute.value)
const checkType = computed(()=>router.currentRoute.value.params.type)

const form = reactive<VisitForm>({} as VisitForm)
const adminForm = ref<Pick<AdminEntity, 'id' | 'password'>>({id:'',password:''});
const visitDummy = useVisitDummy()
const adminDummy = useAdminDummy()
const state = ref<'인증대기'|'인증중'|'인증실패'|'인증됨'>('인증대기')

const handleCheck = () => {
    state.value= '인증중'
    if(checkType.value === 'visit'){
        setTimeout(()=>{
            const find = visitDummy.visit.find((visit)=>visit.phoneNumber === form.phoneNumber && visit.name === form.name)
            if(find){
                visitDummy.currentVisitUser = find
            }
            state.value = find ? '인증됨' : '인증실패';
            if(state.value === '인증실패') setTimeout(()=>state.value='인증대기', 1000)
        },600)
    }
    else {
        setTimeout(()=>{
            const find = adminDummy.admin.find((admin)=>admin.id === adminForm.value.id && admin.password === adminForm.value.password)
            if(find){
                adminDummy.currentAdmin = find
            }
            state.value = find ? '인증됨' : '인증실패';
            if(state.value === '인증실패') setTimeout(()=>state.value='인증대기', 1000)
        },600)
    }
}

onMounted(()=>{
    if(adminDummy.currentAdmin?.adminId && checkType.value==='admin'){
        router.push({name:'admin'})
    }
})

watch(state, ()=>{
    if(state.value!=='인증됨') return;
    if(checkType.value==='visit'){
        router.push({name:'information'})
    }
    else if(checkType.value==='admin'){
        router.push({name:'admin'})
    }
})
</script>
<template>
    <div class="check-page">
        <BaseBack></BaseBack>
        <template v-if="checkType === 'visit'">
            <BaseTitle :title="'방문신청 정보 확인'" :content="['이름과 전화번호를 입력하여', '방문 신청 상태를 확인하세요']"></BaseTitle>
            <div class="check-form">
                <BaseInput :label="'이름'" v-model:value="form.name"></BaseInput>
                <BaseInput :label="'전화번호'" v-model:value="form.phoneNumber"></BaseInput>
                <BaseButton @click="handleCheck" :stroke-important="state==='인증중' || state==='인증실패'">
                    <span v-if="state==='인증대기'">정보 확인하기</span>
                    <span v-else-if="state==='인증중'"><BaseSpinner/></span>
                    <span v-else-if="state==='인증실패'">등록되지 않은 정보입니다.</span>
                    <span v-else-if="state==='인증됨'">정보를 찾았습니다!</span>
                </BaseButton>
            </div>
        </template>
        <template v-if="checkType === 'admin'">
            <BaseTitle :title="'관리자 정보 확인'" :content="['관리자 페이지에 접속하기 위해선','인증이 필요합니다.']"></BaseTitle>
            <div class="check-form">
                <BaseInput :label="'ID'" v-model:value="adminForm.id"></BaseInput>
                <BaseInput :label="'PASSWORD'" v-model:value="adminForm.password" :type="'password'"></BaseInput>
                <BaseButton @click="handleCheck" :stroke-important="state==='인증중' || state==='인증실패'">
                    <span v-if="state==='인증대기'">권한 인증하기</span>
                    <span v-else-if="state==='인증중'"><BaseSpinner/></span>
                    <span v-else-if="state==='인증실패'">인증에 실패했습니다.</span>
                    <span v-else-if="state==='인증됨'">인증되었습니다.</span>
                </BaseButton>
            </div>
        </template>
    </div>
</template>
<style scoped lang="scss">
.check-form{
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
</style>
