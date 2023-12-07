<script setup lang="ts">
const props = defineProps<{
  title?: string;
  content?: string[];
}>();
</script>
<template>
  <div class="base-title">
    <div class="title bold fs-28">{{ props.title }}</div>
    <div class="content fs-18">
      <div v-for="content of props.content">{{content}}</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.base-title {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom:40px;
}
.title {
  letter-spacing: 2px;
}
.content {
  color: var(--content);
  word-break: keep-all;
}
</style>
