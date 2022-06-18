<script lang="ts" setup>
  const props = defineProps({
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: null,
    },
  });
  const emit = defineEmits(['update:modelValue']);
  const onInput = ($event: Event) => {
    emit('update:modelValue', ($event.target as HTMLInputElement).value);
  };
</script>
<template>
  <div class="flex flex-col">
    <label
      v-if="props.label"
      class="mb-2 text-sm font-medium"
      :for="props.label"
      >{{ props.label }}</label
    >
    <input
      v-bind="$attrs"
      :id="props.label"
      class="border text-sm rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-offset-2"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      @input="onInput"
    />
  </div>
</template>
<style lang="css" scoped>
  /** Removed input number arrow */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  /** valid input pattern */
  input:invalid {
    @apply bg-error/20 border-error;
  }
</style>
