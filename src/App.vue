<template>
  <div id="app">
    <Header />
    <main>
      <Albums />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Albums from "./components/Albums.vue";
export default {
  name: "App",
  components: {
    Header,
    Albums,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_style.scss";
</style>
