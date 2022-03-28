<template lang="">
  <div>
    <slot />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    setup() {
      const route = useRoute();
      useMeta({
        title: computed(() => `Nuxt3 | ${route.meta.title}`),
      });
    },
  });
</script>

<style lang=""></style>
