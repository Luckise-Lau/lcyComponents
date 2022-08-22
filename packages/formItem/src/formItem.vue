<template>
  <div>
    <label>{{ label }}</label>
    <div>
      <slot></slot>
      <p v-if="errMassage">{{ errMassage }}</p>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'

export default {
  name: 'LcyFormItem',
  inject: ['form'],
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    }
  },
  data () {
    return {
      errMassage: ''
    }
  },
  // 组件渲染完成后 注册 validate 事件
  mounted () {
    this.$on('validate', () => {
      this.validate()
    })
  },
  methods: {
    validate () {
      if (!this.prop) return false

      const value = this.form.model[this.prop]
      const rules = this.form.rules[this.prop]

      const descriptor = { [this.prop]: rules }
      const validator = new AsyncValidator(descriptor)

      return validator.validate({ [this.prop]: value }, errors => {
        if (errors) this.errMassage = errors[0].message
        else this.errMassage = ''
      })
    }
  }
}
</script>

<style>

</style>
