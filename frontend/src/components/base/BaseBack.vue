<script setup lang="ts">
import router from "@/router";
const props = defineProps<{
  goMain?:boolean
}>()
const handleClick = () => {
  if(props?.goMain) router.push({name:'main'})
  else router.back();
}
</script>
<template>
  <div
    class="icon-container"
    @click="handleClick"
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
