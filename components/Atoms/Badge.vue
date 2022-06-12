<script
  lang="ts"
  setup
>
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
      [props.variant]: true,
      [props.color]: true,
    };
  });
</script>
<template>
  <span
    class="wrapper"
    v-bind="$attrs"
    :class="classNames"
  >
    <slot />
  </span>
</template>
<style
  scoped
  lang="scss"
>
  .wrapper {
    @apply inline-flex
            items-center
            gap-2
            py-1
            px-2
            rounded-full
            text-xs
            font-semibold;
  }
  .solid {
    @apply text-white;
    &.primary {
      @apply bg-primary;
    }
    &.secondary {
      @apply bg-secondary;
    }
    &.info {
      @apply bg-info;
    }
    &.success {
      @apply bg-success;
    }
    &.warning {
      @apply bg-warning;
    }
    &.error {
      @apply bg-error;
    }
  }
  .soft {
    &.primary {
      @apply bg-primary/20 text-primary;
    }
    &.secondary {
      @apply bg-secondary/20 text-secondary;
    }
    &.info {
      @apply bg-info/20 text-info;
    }
    &.success {
      @apply bg-success/20 text-success;
    }
    &.warning {
      @apply bg-warning/20 text-warning;
    }
    &.error {
      @apply bg-error/20 text-error;
    }
  }
</style>
