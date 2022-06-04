<script
  lang="ts"
  setup
>
  definePageMeta({
    title: 'About',
  });
  const counter = ref(0);
  const increment = () => (counter.value += 1);
</script>
<template>
  <div class="h-[calc(100vh-80px)] flex items-center flex-col justify-center container space-y-4">
    <div class="flex flex-col justify-center items-center">
      <p class="text-display-md">{{ counter }}</p>
      <button @click="increment">incrementar</button>
    </div>
  </div>
</template>
