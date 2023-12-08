<script setup lang="ts">
import BaseTitle from '@/components/base/BaseTitle.vue';
import BaseBack from '@/components/base/BaseBack.vue'
import useVisitDummy from '@/dummy/useVisitDummy';
import AdminVisitUser from '@/components/user/AdminVisitUser.vue';
const visitDummy = useVisitDummy()

</script>
<template>
    <div class="admin-view">
        <BaseBack :go-main="true"/>
        <BaseTitle :title="'관리자 페이지'" :content="['관리자 페이지입니다.']"></BaseTitle>
        <div class="users-container">
            <AdminVisitUser v-for="user of visitDummy.visit" :user="user"/>
        </div>
    </div>    
</template>
<style scoped lang="scss">
.users-container{
    display: flex;
    flex-direction: column;
    gap:8px;
}
</style>
