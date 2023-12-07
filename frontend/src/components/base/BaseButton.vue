<script setup lang="ts">

const props = defineProps<{
    stroke ?: boolean,
    strokeImportant?:boolean
}>()


const ripple = (e:MouseEvent) => {
    const ripple = document.createElement('span')
    let x = e.offsetX
    let y = e.offsetY
    ripple.classList.add('anime-ripple')
    ripple.style.left = x+'px'
    ripple.style.top = y+'px'
    e.target.append(ripple);
    setTimeout(()=>{
        ripple.remove()
    },1000)
}
</script>
<template>
    <button class="base-button bold" :class="{'base-button-style-stroke' : props.stroke, 'base-button-style-stroke-important' : props.strokeImportant}" @mousedown="ripple">
        <slot></slot>
    </button>
</template>
<style scoped lang="scss">
.base-button{
    width: 100%;
    position: relative;
    display:inline-block;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin:0px;
    overflow: hidden;
    border-radius: 8px;
    letter-spacing: 1.2px;
    cursor: pointer;
    user-select: none;
    color:#fff;
    background-color: var(--primary);
    transition: 0.3s ease all;
    &-style-stroke{
        color: var(--primary);
        background-color: transparent;
        border: 1px solid var(--primary);
        &:hover{
            background-color: var(--primary);
            color:white;
        }
    }
    &-style-stroke-important{
        border: 1px solid var(--primary);
        &:hover{
            background-color: transparent;
            color:var(--primary);
        }
    }
}
</style>