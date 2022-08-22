<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'LcyForm',
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  provide () {
    return {
      form: this
    }
  },
  methods: {
    validate (cb) {
      const tasks = this.$children
        .filter(child => child.prop)
        .map(child => child.validate())

      Promise.all(tasks)
        // eslint-disable-next-line node/no-callback-literal
        .then(() => cb(true))
        // eslint-disable-next-line node/no-callback-literal
        .catch(() => cb(false))
    }
  }
}
</script>

<style>

</style>
