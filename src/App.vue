<template>
  <div id="app" :style="{'text-align': 'center'}">
    <img src="./assets/logo.png">
    <div class="main">
      <xcxerxes-vue-slider v-model="sliderValue" />
      <div class="main-result">{{sliderValue}}</div>
    </div>
    <div class="main">
      <xcxerxes-vue-slider :value="sliderValue1" @change="change" />
      <div class="main-result">{{sliderValue1}}</div>
    </div>
    <div class="main">
      <xcxerxes-vue-slider v-model="sliderValue2" notPrecentage />
      <div class="main-result">{{sliderValue2}}</div>
    </div>
    <div class="main">
      <xcxerxes-vue-slider v-model="sliderValue3" :color="color" />
      <div class="main-result" style="margin-right: 30px">{{sliderValue3}}</div>
      <input type="color" v-model="color">
    </div>
    <div class="main">
      <xcxerxes-vue-slider disabled v-model="sliderValue4" />
      <div class="main-result">{{sliderValue4}}</div>
    </div>
  </div>
</template>

<script>
import xcxerxesVueSlider from './components/slider'

export default {
  name: 'app',
  data: () => ({
    sliderValue: 40,
    sliderValue1: 30,
    sliderValue2: 20,
    sliderValue3: 60,
    sliderValue4: 50,
    color: '#ff8000'
  }),
  components: {
    xcxerxesVueSlider
  },
  methods: {
    change (value) {
      this.sliderValue1 = value
    }
  }
}
</script>

<style>
 .main {
   width: 80%;
   margin: 0 auto;
   display: flex;
   justify-content: space-around;
 }
</style>
