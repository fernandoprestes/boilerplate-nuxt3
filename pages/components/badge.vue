<script lang="ts" setup>
  definePageMeta({
    title: 'Badge',
  });
  const buttonsVariantsExemples = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];
</script>
<template>
  <div class="container text-left space-y-2">
    <h2 class="text-2xl">Badge</h2>

    <div class="flex flex-col text-white bg-slate-800 font-mono px-4 py-2 gap-2 sm:rounded-md">
      <span>&lt;SBadge variant="solid" color="secondary"&gt;Solid Primary&lt;&sol;SBadge&gt;</span>
    </div>
    <div class="flex flex-col text-white bg-slate-800 font-mono px-4 py-2 gap-2 sm:rounded-md">
      <p>variant = "solid" (default) | "soft" "</p>
      <p>color = "primary" (default) | "secondary" | "info" | "success" | "warning" | "error"</p>
    </div>
    <div
      v-for="(item, index) in buttonsVariantsExemples"
      :key="index"
      class="flex gap-2 flex-wrap flex-1 justify-center md:justify-start items-center"
    >
      <SBadge
        variant="solid"
        :color="item"
        >Solid {{ item }}</SBadge
      >
      <SBadge
        variant="soft"
        :color="item"
        >Soft {{ item }}</SBadge
      >
    </div>
  </div>
</template>
<style scoped lang=""></style>
