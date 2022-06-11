<script
  lang="ts"
  setup
>
  const props = defineProps({
    // solid | outline | ghost | soft | link
    variant: {
      type: String,
      default: 'solid',
    },
    // primary | secondary | success | warning | info
    color: {
      type: String,
      default: 'primary',
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    class="btn-base"
    :class="classNames"
  >
    <slot />
  </button>
</template>
<style
  scoped
  lang="scss"
>
  .btn-base {
    @apply py-3
            px-4
            inline-flex
            justify-center
            items-center
            gap-2
            rounded-md
            border
            border-transparent
            font-semibold
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            transition-all
            duration-500
            ease-in-out
            text-sm;
  }
  .solid {
    &.primary {
      @apply bg-primary/90 text-white;
      &:hover {
        @apply bg-primary;
      }
    }
  }
  .outlined {
    &.primary {
      @apply border-primary text-primary;
      &:hover {
        @apply bg-primary text-white;
      }
    }
  }
  .ghost {
    &.primary {
      @apply text-primary;
      &:hover {
        @apply bg-primary/20;
      }
    }
  }
  .soft {
    &.primary {
      @apply text-primary bg-primary/20;
      &:hover {
        @apply bg-primary text-white;
      }
    }
  }
  .link {
    &.primary {
      @apply text-primary/80;
      &:hover {
        @apply text-primary;
      }
    }
  }
</style>
