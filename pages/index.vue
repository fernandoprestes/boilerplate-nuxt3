<template>
  <div class="container">
    <h1 class="">Hello World</h1>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    layout: 'default',
    setup() {
      definePageMeta({
        title: 'Home',
      });
    },
  });
</script>
