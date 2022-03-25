<template>
  <div class="container">
    <h1>Hello World</h1>
    <img
      v-for="i in items"
      :key="i"
      src=""
      alt=""
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    layout: 'default',
    setup() {},
    data() {
      return {
        items: [],
      };
    },
  });
</script>
