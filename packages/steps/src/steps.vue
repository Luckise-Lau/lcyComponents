<template>
  <div class="lg-steps">
    <div class="lg-steps-line"></div>

    <div
      class="lg-step"
      v-for="index in count"
      :key="index"
      :style="{ color: active >= index ? activeColor : defaultColor }"
    >{{ index }}</div>
  </div>
</template>

<script>
export default {
  name: 'LcySteps',
  props: {
    count: {
      type: Number,
      default: 3
    },
    active: {
      type: Number,
      default: 0
    },
    activeColor: {
      type: String,
      default: '#f00'
    },
    defaultColor: {
      type: String,
      default: '#2F4056'
    }
  }
}
</script>

<style scoped>
@import './steps.css'

</style>
