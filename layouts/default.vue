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
  <div>
    <header class="h-20 shadow-sm flex items-">
      <div class="container flex justify-between items-center">
        <nuxt-link
          to="/"
          class="text-display-lg"
        >
          Logo
        </nuxt-link>
        <ul class="flex justify-between items-center gap-4">
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
        </ul>
      </div>
    </header>
    <div class="container flex justify-between items-center">
      <slot />
    </div>
  </div>
</template>

<style lang=""></style>
