<script
  lang="ts"
  setup
>
  const emits = defineEmits(['click']);
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
  <button
    type="button"
    class="wrapper"
    :class="classNames"
    v-bind="$attrs"
    @click="emits('click')"
  >
    <slot />
  </button>
</template>
<style
  scoped
  lang="scss"
>
  .wrapper {
    @apply py-2
            px-4
            lg:px-8
            inline-flex
            justify-center
            items-center
            gap-2
            border
            border-transparent
            rounded-md
            font-semibold
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            transition-all
            duration-500
            ease-in-out;
  }
  .solid {
    @apply text-white;
    &.primary {
      @apply bg-primary/90 hover:bg-primary focus:ring-primary;
    }
    &.secondary {
      @apply bg-secondary/90 hover:bg-secondary focus:ring-secondary;
    }
    &.info {
      @apply bg-info/90 hover:bg-info focus:ring-info;
    }
    &.success {
      @apply bg-success/90 hover:bg-success focus:ring-success;
    }
    &.warning {
      @apply bg-warning/90 hover:bg-warning focus:ring-warning;
    }
    &.error {
      @apply bg-error/90 hover:bg-error focus:ring-error;
    }
  }
  .outlined {
    &.primary {
      @apply border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary;
    }

    &.secondary {
      @apply border-secondary text-secondary hover:bg-secondary hover:text-white focus:ring-secondary;
    }
    &.info {
      @apply border-info text-info hover:bg-info hover:text-white focus:ring-info;
    }
    &.success {
      @apply border-success text-success hover:bg-success hover:text-white focus:ring-success;
    }
    &.warning {
      @apply border-warning text-warning hover:bg-warning hover:text-white focus:ring-warning;
    }
    &.error {
      @apply border-error text-error hover:bg-error hover:text-white focus:ring-error;
    }
  }
  .ghost {
    &.primary {
      @apply text-primary hover:bg-primary/20 focus:ring-primary;
    }

    &.secondary {
      @apply text-secondary hover:bg-secondary/20 focus:ring-secondary;
    }
    &.info {
      @apply text-info hover:bg-info/20 focus:ring-info;
    }
    &.success {
      @apply text-success hover:bg-success/20 focus:ring-success;
    }
    &.warning {
      @apply text-warning hover:bg-warning/20 focus:ring-warning;
    }
    &.error {
      @apply text-error hover:bg-error/20 focus:ring-error;
    }
  }
  .soft {
    &.primary {
      @apply text-primary bg-primary/20 hover:bg-primary hover:text-white focus:ring-primary;
    }
    &.secondary {
      @apply text-secondary bg-secondary/20 hover:bg-secondary hover:text-white focus:ring-secondary;
    }
    &.info {
      @apply text-info bg-info/20 hover:bg-info hover:text-white focus:ring-info;
    }
    &.success {
      @apply text-success bg-success/20 hover:bg-success hover:text-white focus:ring-success;
    }
    &.warning {
      @apply text-warning bg-warning/20 hover:bg-warning hover:text-white focus:ring-warning;
    }
    &.error {
      @apply text-error bg-error/20 hover:bg-error hover:text-white focus:ring-error;
    }
  }
  .link {
    @apply focus:ring-0 focus:ring-offset-0;
    &.primary {
      @apply text-primary/80 hover:text-primary;
    }
    &.secondary {
      @apply text-secondary/80 hover:text-secondary;
    }
    &.info {
      @apply text-info/80 hover:text-info;
    }
    &.success {
      @apply text-success/80 hover:text-success;
    }
    &.warning {
      @apply text-warning/80 hover:text-warning;
    }
    &.error {
      @apply text-error/80 hover:text-error;
    }
  }
</style>
