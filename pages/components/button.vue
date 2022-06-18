<script lang="ts" setup>
  definePageMeta({
    title: 'Buttons',
  });
  const buttonsVariantsExemples = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];
</script>
<template>
  <div class="container text-left space-y-2">
    <h2 class="text-2xl">Buttons</h2>

    <div class="flex flex-col text-white bg-slate-800 font-mono px-4 py-2 gap-2 sm:rounded-md">
      <code>&lt;atoms-button variant="solid" color="secondary"&gt;Solid Primary&lt;&sol;atoms-button&gt;</code>
    </div>
    <div class="flex flex-col text-white bg-slate-800 font-mono px-4 py-2 gap-2 sm:rounded-md">
      <p>variant = "solid" (default) | "outlined" | "soft" | "ghost" | "link"</p>
      <p>color = "primary" (default) | "secondary" | "info" | "success" | "warning" | "error"</p>
    </div>
    <div
      v-for="(item, index) in buttonsVariantsExemples"
      :key="index"
      class="flex gap-2 flex-wrap flex-1 justify-center md:justify-start items-center"
    >
      <atoms-button
        variant="solid"
        :color="item"
        >Solid {{ item }}</atoms-button
      >
      <atoms-button
        variant="outlined"
        :color="item"
        >Outlined {{ item }}</atoms-button
      >
      <atoms-button
        variant="soft"
        :color="item"
        >Soft {{ item }}</atoms-button
      >
      <atoms-button
        variant="ghost"
        :color="item"
        >Ghost {{ item }}</atoms-button
      >
      <atoms-button
        variant="link"
        :color="item"
        >Link {{ item }}</atoms-button
      >
    </div>
  </div>
</template>
