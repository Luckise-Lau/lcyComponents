<template>
  <div id="app">
    <!-- 步骤条组件 -->
    <div class="lcyStepsTestContainer">
      <LcySteps :count="count" :active="active" />
      <button class="stepsBtn" @click="next">下一步</button>
    </div>
    <!-- 表单组件 -->
    <div class="lcyFormTestContainer">
      <LcyForm class="form" ref="form" :model="user" :rules="rules">
        <LcyFormItem label="用户名" prop="userName">
          <LcyInput :value="user.userName" @input="user.userName = $event" placeholder="请输入用户名" />
        </LcyFormItem>
        <LcyFormItem label="密码" prop="password">
          <LcyInput type="password" v-model="user.password" placeholder="请输入密码" />
        </LcyFormItem>
        <LcyFormItem>
          <LcyButton type="primary" @click="login">登 录</LcyButton>
        </LcyFormItem>
      </LcyForm>
    </div>
  </div>
</template>

<script>
import LcySteps from '../packages/steps/src/steps.vue'
import LcyForm from '../packages/form/src/form.vue'
import LcyFormItem from '../packages/formItem/src/formItem.vue'
import LcyInput from '../packages/input/src/input.vue'
import LcyButton from '../packages/button/src/button.vue'

export default {
  name: 'App',
  components: {
    LcySteps,
    LcyForm,
    LcyFormItem,
    LcyInput,
    LcyButton
  },
  data () {
    return {
      count: 5,
      active: 1,
      user: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位的密码'
          }
        ]
      }
    }
  },
  methods: {
    next () {
      this.active < this.count ? this.active++ : (alert('该步骤已经结束!'))
    },
    login () {
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
        }
      })
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.stepsBtn{
  margin-top: 15px; cursor: pointer;
}
</style>
