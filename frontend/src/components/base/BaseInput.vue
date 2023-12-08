<script setup lang="ts">
import { InputTypeHTMLAttribute, computed, ref } from "vue";

const props = withDefaults(
  defineProps<{
    label: string;
    value?: string;
    type?: InputTypeHTMLAttribute;
    disabled?:boolean;
  }>(),
  {
    value: "",
    type: "text",
  }
);
const emits = defineEmits<{ (e: "update:value", value: any) }>();

const inputValue = computed({
  get() {
    return props.value;
  },
  set(value) {
    emits("update:value", value);
  },
});
</script>
<template>
  <div
    class="base-input-container"
    :class="{ 'base-input-container--active': !!props.value }"
  >
    <input
      class="base-input"
      :type="props.type"
      v-model="inputValue"
      :placeholder="''"
      :disabled="props.disabled"
    />
    <div class="label">{{ props.label }}</div>
  </div>
</template>
<style scoped lang="scss">
@mixin labelFocus {
  top: calc(0% - 1em);
  left: 8px;
  font-size: 14px;
  color: var(--primary);
}

.base-input-container {
  position: relative;
  &--active {
    .label {
      @include labelFocus;
    }
    .base-input {
      &[type="date"]::-webkit-datetime-edit-text {
        -webkit-appearance: initial;
        display: inline;
      }

      &[type="date"]::-webkit-datetime-edit-month-field {
        -webkit-appearance: initial;
        display: inline;
      }

      &[type="date"]::-webkit-datetime-edit-day-field {
        -webkit-appearance: initial;
        display: inline;
      }

      &[type="date"]::-webkit-datetime-edit-year-field {
        -webkit-appearance: initial;
        display: inline;
      }
      border-color: var(--primary);
    }
  }
}
.base-input {
  display: block;
  width: 100%;
  position: relative;
  padding: 12px 16px;
  box-sizing: border-box;
  border: solid 2px var(--content);
  border-radius: 8px;
  transition: border-color 0.225s ease;
  font-size: 16px;

  &[type="date"]::-webkit-datetime-edit-text {
    -webkit-appearance: none;
    display: none;
  }

  &[type="date"]::-webkit-datetime-edit-month-field {
    -webkit-appearance: none;
    display: none;
  }

  &[type="date"]::-webkit-datetime-edit-day-field {
    -webkit-appearance: none;
    display: none;
  }

  &[type="date"]::-webkit-datetime-edit-year-field {
    -webkit-appearance: none;
    display: none;
  }
  &:focus {
    border-color: var(--primary);
    & + .label {
      @include labelFocus;
    }
  }
}
.label {
  position: absolute;
  user-select: none;
  transition: all 0.225s ease;
  left: 16px;
  top: 50%;
  color: var(--content);
  transform: translateY(-50%);
}
</style>
