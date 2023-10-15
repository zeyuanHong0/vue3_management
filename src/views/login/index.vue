<template>
  <div class="login_container">
    <el-row>
      <!-- 左侧(占位) -->
      <el-col :span="12" :xs="0"></el-col>
      <!-- 右侧 -->
      <el-col :span="12" :xs="24">
        <!-- 表单 -->
        <el-form
          class="login_form"
          ref="ruleFormRef"
          :model="loginForm"
          :rules="rules"
        >
          <h1>Hello</h1>
          <h2>欢迎来到哲理源甄选</h2>
          <!-- 用户名 -->
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
              placeholder="请输入用户名"
              @keyup.enter="handleSubmit"
            ></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input
              :prefix-icon="Lock"
              v-model="loginForm.password"
              placeholder="请输入密码"
              type="password"
              show-password
              @keyup.enter="handleSubmit"
            ></el-input>
          </el-form-item>
          <!-- 登录按钮 -->
          <el-form-item>
            <el-button
              :loading="loading"
              class="login_button"
              type="primary"
              @click="handleSubmit"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
export default { name: 'login' }
</script>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { User, Lock } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
import type { FormInstance } from 'element-plus'
import { useUserStore } from '@/store/modules/user'
import { getTime } from '@/utils/getTime'
const userStore = useUserStore()
const $router = useRouter()
const $route = useRoute()

interface ILoginForm {
  username: string
  password: string
}

const loginForm = reactive<ILoginForm>({
  username: '',
  password: '',
})
const loading = ref<boolean>(false)
const ruleFormRef = ref<FormInstance>() // 表单ref

// 定义校验规则
const validateName = async (_rule: any, value: any, callback: any) => {
  // 必填，且长度不小于5个字符
  if (!value) {
    callback(new Error('请输入用户名'))
  } else if (value.length < 5) {
    callback(new Error('用户名长度至少为 5 个字符'))
  } else {
    callback()
  }
}

const validatePassword = async (_rule: any, value: any, callback: any) => {
  // 不小于6个字符
  if (!value) {
    callback(new Error('请输入密码'))
  } else if (value.length < 6) {
    callback(new Error('密码长度至少为 6 个字符'))
  } else {
    callback()
  }
}

const rules = {
  username: [{ validator: validateName, trigger: 'change' }],
  password: [{ validator: validatePassword, trigger: 'change' }],
}

// 登录
const handleSubmit = async () => {
  // 校验
  await ruleFormRef.value?.validate()
  // 登录
  try {
    loading.value = true
    await userStore.userLogin({
      username: loginForm.username,
      password: loginForm.password,
    })
    // 获取当前时间
    const time = getTime()
    // 如果退出登录的时候，有传递 redirect 参数，就跳转到 redirect 页面，否则跳转到首页
    const redirect = $route.query.redirect as string
    $router.push(redirect || '/')
    ElNotification({
      title: `Hi,${time}好`,
      message: `欢迎回来`,
      type: 'success',
    })
  } catch (error) {
    ElNotification({
      title: '账号或者密码不正确',
      message: (error as Error).message,
      type: 'error',
    })
  } finally {
    loading.value = false
  }
}
</script>
<style lang="scss" scoped>
@import './scss/index.scss';
</style>
