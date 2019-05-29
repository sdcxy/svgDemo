<template>
  <svg :class="svgClass" aria-hidden="true" :font-size="fontSize">
    <use :xlink:href="iconName" ></use>
  </svg>
</template>

<script>
export default {
  name: 'icon',
  props: {
    iconClass: {
      type: String,
      require: true
    },
    className: {
      type: String
    },
    fontSize: {
      type: String,
      default: '16'
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      if (this.iconName) {
        return 'svg-icon ' + this.iconName
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>
<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
