<script
  lang="ts"
  setup
>
  import { useRoute } from 'vue-router';

  const route = useRoute();
  useHead({
    title: computed(() => `Nuxt3 | ${route.meta.title}`),
  });
</script>
<template>
  <main>
    <aside></aside>
    <slot></slot>
  </main>
</template>
