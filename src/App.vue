<template>
  <div id="app">
    <img src="./assets/logo.png">
    <xcxerxes-slider :value="10" />
  </div>
</template>

<script>
import xcxerxesSlider from './components/slider'

export default {
  name: 'app',
  components: {
    xcxerxesSlider
  }
}
</script>

<style>

</style>
