<template>
    <div class="layout">
      <navbar />
      <div class="hero">
        <div class="content">
          <Nuxt />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "customLayout",
  };
  </script>
  
  <style lang="scss">
  /* colors */
  $primary-background-color     : #0f1115;
  $secondary-background-color: #19181f;
  $accent-color         : #222128;
  
  /* text color */
  $text-color-white : #ffffff;
  $text-color-grey : #57585b; 
  .layout {
    height: 100vh;
    .hero {
      display: flex;
      width: 100%;
      height: auto;
      .content {
        border-top-left-radius: 30px;
        width: 100%;
        background-color: $secondary-background-color;
      }
    }
  }
  </style>
  