<script setup lang="ts">
import router from "@/router";
</script>
<template>
  <div
    class="icon-container"
    @click="router.push('/proxy/3000/absproxy/3000/')"
  >
    <Icon class="back-icon" icon="fa-arrow-left"></Icon>
  </div>
</template>
<style scoped lang="scss">
.icon-container {
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 12px;
}
.back-icon {
  padding-left: 4px;
  color: var(--content);
}
</style>
