import LcyInput from '../'

export default {
  title: 'LcyInput',
  component: LcyInput
}

// 编写 text story
export const Text = () => ({
  components: { LcyInput },
  template: '<LcyInput v-model="value" />',
  data () {
    return {
      value: 'admin'
    }
  }
})

// 编写 password story
export const Password = () => ({
  components: { LcyInput },
  template: '<LcyInput type="password" v-model="value" />',
  data () {
    return {
      value: 'adminPassword'
    }
  }
})
