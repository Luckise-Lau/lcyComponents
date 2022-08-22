import LcyForm from '../'
import LcyFormItem from '../../formItem'
import LcyInput from '../../input'
import LcyButton from '../../button'

export default {
  title: 'LcyForm',
  component: LcyForm
}

// login story
export const Login = () => ({
  components: { LcyForm, LcyFormItem, LcyInput, LcyButton },
  template: `
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
  `,
  data () {
    return {
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
})
