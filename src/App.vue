<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/doc">Doc</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
