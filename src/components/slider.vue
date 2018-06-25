<template>
  <div class="xcxerxes-slider">
    <div class="linea-slider"
    :class="{'s-d': disabled}"
    @click="clickLinea"
    ref="lineaSlider">
      <div class="linea-pintada"
      ref="lineaPintada"
      :style="{backgroundColor: color, width: `${sliderValue}%`, maxWidth: ancho ? `${ancho}px` : 'auto'}"
      >
       <div
       class="circle-slider"
       ref="circle"
       @mousedown="mousedownx"
       @touchstart="mousedownx($event)"
       @keydown.left="onLeftKeyDown"
       @keydown.right="onRightKeyDown"
       >
       <span class="circle-interno"></span>
       <div class="xcxerxes-numero-slider">
         <span>{{Math.round(sliderValue) > 100 ? 100 : Math.round(sliderValue)}} {{notPrecentage ? '' : '%'}}</span>
       </div>
       </div> 
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'xcxerxes-slider',
  props: {
    value: {
      type: Number,
      default: 0
    },
    disabled: {
      type: [Boolean, String],
      default: false
    },
    color: {
      type: String
    },
    min: {
      type: Number,
      default: 1
    },
    step: {
      type: Number,
      default: 1
    },
    notPrecentage: {
      type: [Boolean],
      default: false
    }
  },
  data () {
    return {
      sliderValue: this.value,
      numeroMostrar: this.value,
      ancho: 0,
      valuex: 0
    }
  },
  created () {
    this.sliderValue = this.value
  },
  mounted () {
    this.ancho = this.$refs.lineaSlider.offsetWidth
    window.addEventListener('resize', this.resizex)
  },
  methods: {
    resizex () {
      this.ancho = this.$refs.lineaSlider.offsetWidth
      this.setSliderValue(this.numeroMostrar)
    },
    setSliderValue (value) {
      if (value <= 100 && value >= 0) {
        this.sliderValue = value
      }
    },
    // line click
    clickLinea () {
    },
    mousedownx () {
      window.addEventListener('mousemove', this.mouseMovex)
      window.addEventListener('mouseup', this.removeEvents)
      window.addEventListener('touchmove', this.mouseMovex)
      window.addEventListener('touchend', this.removeEvents)
    },
    mouseMovex () {
      if (this.disabled) {
        return
      }
      let lineaPintada = this.$refs.lineaPintada
      let linea = this.$refs.lineaSlider
      let circle = this.$refs.circle
      let x
      if (event.type === 'touchmove') {
        x = event.targetTouches[0].clientX
      } else {
        x = event.clientX
      }
      let valorx = x - (linea.getBoundingClientRect().left - circle.offsetWidth/2)
      if (this.min) {
        if ((valorx / this.ancho) * 100 <= this.min) {
          valorx = valorx
        }
      } else {
        if (Math.sign(valorx) === -1) {
          valorx = 0
        }
      }
      if (valorx > this.ancho) {
        valorx = this.ancho
      }

      this.valuex = valorx
      let obtenerPorcentaje = 0
      let porcentajex = 0
      obtenerPorcentaje = (valorx / this.ancho) * 100
      porcentajex = Math.round(obtenerPorcentaje)
      this.setSliderValue(porcentajex)
      this.numeroMostrar = porcentajex
      this.$emit('input', porcentajex)
    },
    removeEvents (event) {
      if (this.disabled) {
        return
      }
      let obtenerPorcentaje = (this.valuex / this.ancho) * 100
      let porcentajex = Math.round(obtenerPorcentaje)

      this.setSliderValue(porcentajex)
      this.$emit('input',porcentajex)
      window.removeEventListener('mousemove', this.mouseMovex)
      window.removeEventListener('mouseup', this.removeEvents)
      window.removeEventListener('touchmove', this.mouseMovex)
      window.removeEventListener('touchend', this.removeEvents)
    }
  }
}
</script>

<style>
.s-d {
  cursor: default;
}
.s-d .circle-slider {
  background-color: rgb(200, 200, 200);
  cursor: default;
}
.s-d .circle-interno {
  opacity: 0;
}
.s-d .circle-slider .xcxerxes-numero-slider {
  background-color: rgb(60, 60, 60);
}
.s-d .linea-pintada {
  background-color: rgb(200, 200, 200);
}
.xcxerxes-slider {
  width: 100%;
  padding: 10px;
}
.linea-slider {
  width: 100%;
  position: relative;
  background-color: rgb(235, 235, 235);
  height: 6px;
  border-radius: 3px;
  cursor: pointer;
}
.linea-pintada {
  width: 0px;
  height: 100%;
  background-color: rgb(31, 116, 255);
}
.circle-slider {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  transition: transform .3s ease;
  backface-visibility: visible;
  background-color: rgb(255, 255, 255);
  right: 0;
}
.circle-interno {
  border: 2px solid rgb(31, 116, 255);
  position: absolute;
  left: 0%;
  top: 0%;
  transform: scale(1);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  transition: all .3s ease;
  background: rgb(255, 255, 255);
  backface-visibility: hidden;
  box-sizing: border-box;
}
.xcxerxes-numero-slider {
  position: absolute;
  top: -7px;
  left: 50%;
  transform: translate(-50%, -50%) scale(.5);
  padding: 4px;
  background-color: rgb(31, 116, 255);
  border-radius: 5px;
  transition: all .3s ease;
  font-size: 12px;
}
</style>

