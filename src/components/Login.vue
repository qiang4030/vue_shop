<template>
  <div class="container">
    <el-form
      ref="elForm"
      :model="formData"
      :rules="rules"
      size="medium"
      label-width="100px"
      class="form-field"
    >
      <h2 class="title">Sign in</h2>
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model="formData.username"
          placeholder="Username"
          :maxlength="10"
          :minlength="5"
          show-word-limit
          clearable
          prefix-icon="el-icon-user"
          :style="{ width: '100%' }"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="formData.password"
          placeholder="Password"
          :maxlength="10"
          clearable
          prefix-icon="el-icon-lock"
          show-password
          :style="{ width: '100%' }"
        ></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">登录</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 8,
            message: '长度在3-8个字符',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 10,
            message: '长度在6-10个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['elForm'].validate(async valid => {
        if (!valid) return
        // TODO 提交表单
        const { data: res } = await this.$http.post('login', this.formData)
        // console.log(res);
        if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
        this.$message.success(res.meta.msg)
        window.sessionStorage.setItem('token', res.data.token)
        this.$router.push('/home')
      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  height: 100%;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .form-field {
  width: 24%;
  min-width: 280px;
  height: 30%;
  min-height: 300px;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.title {
  text-align: center;
  text-transform: uppercase;
}
</style>
