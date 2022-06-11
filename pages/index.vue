<script
  lang="ts"
  setup
>
  definePageMeta({
    title: 'Home',
  });
</script>
<template>
  <div class="h-[calc(100vh-80px)] flex items-center flex-col justify-center container space-y-4">
    <h1 class="text-display-2xl">Boilerplate Nuxt3</h1>
    <div class="text-left space-y-2">
      <h2 class="text-2xl">Buttons</h2>
      <div class="flex flex-col text-white bg-slate-800 font-mono px-4 py-2 gap-2 rounded-md">
        <p>variant = "solid" | "outlined" | "soft" | "ghost" | "link"</p>
        <p>color = "primary" | "secondary" | "info" | "success" | "warning" | "error"</p>
      </div>
      <div class="flex gap-2">
        <atoms-button variant="solid">Solid Primary</atoms-button>
        <atoms-button variant="outlined">Outlined Primary</atoms-button>
        <atoms-button variant="soft">Soft Primary</atoms-button>
        <atoms-button variant="ghost">Ghost Primary</atoms-button>
        <atoms-button variant="link">Link Primary</atoms-button>
      </div>
    </div>
  </div>
</template>
