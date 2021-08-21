<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "Tab",
  props: {
    x: {
      type: String,
    },
  },
};
</script>
