<script setup lang="ts">
import useVisitDummy from '@/dummy/useVisitDummy';
import {VisitApproval, VisitEntity} from '@/model/visit'
import router from '@/router';
import { computed, ref } from 'vue';
const props = defineProps<{
    user : VisitEntity
}>()
const selectApproval = ref<VisitApproval>(props.user.approvalStatus)
const approvalColor = computed(()=>{
    if(selectApproval.value === '승인') return 'primary'
    else if(selectApproval.value === '대기') return 'content'
    else return 'error'
})

const visitDummy = useVisitDummy();
const handleClick = () => {
    visitDummy.currentVisitUser = props.user
    router.push({name:'information'})
}

</script>
<template>
    <div class="user-container" @click="handleClick">
        <div class="user-approval" :data-status="approvalColor">{{ props.user.approvalStatus }}</div>    
        <div>{{props.user.name }}</div>
        <div>{{props.user.startDate}} ~ {{ props.user.endDate }}</div>        
    </div>
</template>
<style scoped lang="scss">
.user-container{
    cursor: pointer;
    display: flex;
    gap: 12px;
    align-items: center;
    border-radius: 8px;
    padding: 8px 12px;  
    transition: 0.225s all ease;
    &:hover {
        transform: translateX(-2px);
        box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.15);
    }
}

.user-approval{
    border-radius: 8px;
    margin-right: 12px;
    // padding: 2px 4px;
    &[data-status='primary']{
        color: var(--primary);
        // border: 1px solid var(--primary);
    }
    &[data-status='content']{
        color: var(--content);
        // border: 1px solid var(--content);
    }
    &[data-status='error']{
        color: var(--error);
        // border: 1px solid var(--error);
    }

}

</style>
