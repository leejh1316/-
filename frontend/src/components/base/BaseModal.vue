<script setup lang="ts">
const props = defineProps<{
    open : boolean
}>()
const emits = defineEmits<{(e:'close')}>()
</script>
<template>
    <Teleport :to="'body'">
            <div v-if="props.open" class="base-modal" @click.self="emits('close')">
                <slot></slot>
            </div>
    </Teleport>
</template>
<style scoped lang="scss">
.base-modal{
    position: fixed;
    z-index: 999;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba($color: #000000, $alpha: 0.3);
    top:0;
    left:0;
}
</style>
