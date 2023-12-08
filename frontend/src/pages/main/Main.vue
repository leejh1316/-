<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue';
import BaseTitle from '@/components/base/BaseTitle.vue';
</script>
<template>
    <div class="main-view">
        <BaseTitle :title="'사전 방문 신청'" :content="['간단한 정보를 입력하여','방문을 신청해보세요.']"></BaseTitle>
        <div>
            <BaseCard :title="'사전방문 신청'" :contents="['간단한 정보를 입력하여','방문을 신청해보세요.']" :btn-content="'신청하러 가기'" :move-name="'visit'"></BaseCard>
            <BaseCard :title="'승인여부 확인'" :contents="['이미 사전방문 신청을 했다면','승인여부를 확인해보세요.']" :btn-content="'확인하러 가기'" :move-name="'check'" :move-params="{type:'visit'}"></BaseCard>
            <BaseCard :title="'관리자'" :contents="['방문신청 서비스의 관리자 이신가요?','각종 업무관련 페이지가 있습니다.']" :btn-content="'서비스 관리하기'" :move-name="'check'" :move-params="{type:'admin'}"></BaseCard>
        </div>
    </div>    
</template>
<style scoped lang="scss">
.main-view > div{
    display:flex;
    flex-direction: column;
    gap: 16px;
}

</style>
