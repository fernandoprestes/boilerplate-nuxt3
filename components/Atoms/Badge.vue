<script lang="ts" setup>
  const props = defineProps({
    variant: {
      type: String,
      default: 'solid',
    },
    color: {
      type: String,
      default: 'primary',
    },
  });

  const classNames = computed(() => {
    return {
      [`bg-${props.color}`]: true,
      [`text-white`]: props.variant === 'solid',
      [`bg-${props.color} bg-opacity-20 text-${props.color}`]: props.variant === 'soft',
    };
  });
</script>
<template>
  <span
    class="inline-flex items-center gap-2 py-1 px-2 rounded-full text-xs font-semibold"
    v-bind="$attrs"
    :class="classNames"
  >
    <slot />
  </span>
</template>
