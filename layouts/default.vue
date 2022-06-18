<script lang="ts" setup>
  import { useRoute } from 'vue-router';

  const { width } = useWindowSize();
  const isMobile = computed(() => {
    return width.value < 1023;
  });

  const route = useRoute();
  useHead({
    title: computed(() => `Nuxt3 | ${route.meta.title}`),
  });

  const isShowMenuMobileOpen = ref(false);
  const ShowMenuMobileOpenRef = ref(null);

  onClickOutside(ShowMenuMobileOpenRef, _event => {
    isShowMenuMobileOpen.value = false;
  });

  const handleToggleMenu = () => {
    isShowMenuMobileOpen.value = !isShowMenuMobileOpen.value;
  };
</script>
<template>
  <div class="flex h-screen overflow-hidden">
    <div class="lg:w-64 relative">
      <div
        ref="ShowMenuMobileOpenRef"
        class="bg-secondary h-screen w-52 lg:fixed lg:block px-2 py-4 lg:translate-x-0 transition-all ease-in-out duration-500 z-40"
        :class="isShowMenuMobileOpen ? 'fixed' : 'block fixed -translate-x-full'"
      >
        <div class="flex justify-between items-center">
          <atoms-icon-arrow-back
            v-if="isMobile"
            class="cursor-pointer text-2xl"
            @click="handleToggleMenu"
          >
            back
          </atoms-icon-arrow-back>
          <div class="flex justify-center w-full text-3xl">
            <nuxt-link to="/">Home</nuxt-link>
          </div>
        </div>
        <div class="mt-8">
          <h3>Components/</h3>
          <div class="flex gap-1 flex-col py-4 w-full">
            <nuxt-link
              class="px-2 py-2 bg-primary/10 rounded-xl hover:bg-primary/30 cursor-pointer"
              to="/components/badge"
              >badge</nuxt-link
            >
            <nuxt-link
              class="px-2 py-2 bg-primary/10 rounded-xl hover:bg-primary/30 cursor-pointer"
              to="/components/button"
              >button</nuxt-link
            >
            <nuxt-link
              class="px-2 py-2 bg-primary/10 rounded-xl hover:bg-primary/30 cursor-pointer"
              to="/components/form"
              >form</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="px-2 w-full">
      <header class="flex justify-between sticky top-0 bg-white border-b border-gray-200 z-30 py-2">
        <div>
          <atoms-icon-menu
            v-if="isMobile"
            class="text-3xl cursor-pointer"
            @click="handleToggleMenu"
          />
        </div>
        <div>Avatar</div>
      </header>
      <slot />
    </div>
  </div>
</template>
