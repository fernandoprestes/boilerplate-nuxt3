<template>
  <div class="h-[calc(100vh-80px)] flex items-center flex-col justify-center container space-y-4">
    <h1 class="text-display-2xl">Boilerplate Nuxt3</h1>
    <nuxt-link
      :to="{ name: 'about' }"
      class="bg-green-400 px-4 py-2 rounded-md hover:bg-green-200"
      >Sobre</nuxt-link
    >
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Home',
    layout: 'default',
    setup() {
      definePageMeta({
        title: 'Home',
      });
    },
  });
</script>
