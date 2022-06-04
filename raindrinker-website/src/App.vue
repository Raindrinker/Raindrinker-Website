<template>
  <div id="app">
    <Structure/>
  </div>
</template>

<script>

import Structure from "./components/GeneralStructure";
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

  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    overflow-x: hidden;
  }

  #app {
   overflow-x: hidden;
  }

  @font-face {
    font-family: "Nunito";
    src: local("Nunito"),
    url(./assets/fonts/Nunito/Nunito-Regular.ttf) format("truetype");
  }


</style>
