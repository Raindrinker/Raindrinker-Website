<template>
  <div id="app">
    <Structure/>
  </div>
</template>

<script>

import Structure from "./components/Structure";
export default {
  name: 'App',
  components: {
    Structure
  },
  methods: {
    track() {
      this.$ga.page('/');
    }
  }
}
</script>

<style>

  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  #app {
    width: 100vw;
    height: 100vh;
  }

  @font-face {
    font-family: "Nunito";
    src: local("Nunito"),
    url(./assets/fonts/Nunito/Nunito-Regular.ttf) format("truetype");
  }


</style>
