<template>
  <div class="layout">
    <navbar />
    <div class="hero">
      <sidebar />
      <div class="content">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "defaultLayout",
};
</script>

<style lang="scss">
.layout {
  height: 100vh;
  .hero {
    display: flex;
    width: 100%;
    height: calc(100vh - 10%);
  }
}
</style>
