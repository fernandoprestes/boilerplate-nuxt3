<script lang="ts" setup>
  definePageMeta({
    title: 'Buttons',
  });

  const output = ref('');

  const handleClick = (variant: string, color: string) => {
    output.value = `${variant} ${color} has clicked`;
  };

  const buttonsColorsExemples = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];
  const buttonsVariantsExemples = ['solid', 'outlined', 'soft', 'ghost', 'link'];
</script>
<template>
  <div class="container text-left space-y-2">
    <h2 class="text-2xl">Buttons</h2>

    <div class="flex flex-col text-white bg-slate-800 font-mono px-4 py-2 gap-2 sm:rounded-md">
      <code>&lt;SButton variant="solid" color="secondary"&gt;Solid Primary&lt;&sol;SButton&gt;</code>
    </div>
    <div class="flex flex-col text-white bg-slate-800 font-mono px-4 py-2 gap-2 sm:rounded-md">
      <p>variant = "solid" (default) | "outlined" | "soft" | "ghost" | "link"</p>
      <p>color = "primary" (default) | "secondary" | "info" | "success" | "warning" | "error"</p>
    </div>
    <div
      v-for="variant in buttonsVariantsExemples"
      :key="variant"
      class="flex gap-2 flex-wrap flex-1 justify-center md:justify-start items-center"
    >
      <SButton
        v-for="color in buttonsColorsExemples"
        :key="color"
        :variant="variant"
        :color="color"
        @click="handleClick(variant, color)"
      >
        {{ variant }} {{ color }}
      </SButton>
    </div>
    <div
      v-if="output"
      class="flex flex-col text-white bg-slate-800 font-mono px-4 py-2 gap-2 sm:rounded-md"
    >
      {{ output }}
    </div>
  </div>
</template>
