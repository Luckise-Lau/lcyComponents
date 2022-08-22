<template>
  <div>
    <input
      v-bind="$attrs"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="handleInput"
    >
  </div>
</template>

<script>
export default {
  name: 'LcyInput',
  inheritAttrs: false,
  props: {
    value: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput (evt) {
      this.$emit('input', evt.target.value)

      // 查找 父组件 / 祖先组件 form-item
      const findParent = parent => {
        while (parent) {
          if (parent.$options.name === 'LcyFormItem') {
            break
          } else {
            parent = parent.$parent
          }
        }
        return parent
      }

      // 触发 父组件 / 祖先组件的 validate 事件
      const parentComponent = findParent(this.$parent)
      if (parentComponent) parentComponent.$emit('validate')
    }
  }
}
</script>

<style>

</style>
