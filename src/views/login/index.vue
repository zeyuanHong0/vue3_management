<template>
  <div class="login_container">
    <el-row>
      <!-- 左侧(占位) -->
      <el-col :span="12" :xs="0"></el-col>
      <!-- 右侧 -->
      <el-col :span="12" :xs="24">
        <!-- 表单 -->
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到哲理源甄选</h2>
          <!-- 用户名 -->
          <el-form-item>
            <el-input
              :prefix-icon="User"
              v-model="username"
              placeholder="请输入用户名"
              @keyup.enter="handleSubmit"
            ></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item>
            <el-input
              :prefix-icon="Lock"
              v-model="password"
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
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { User, Lock } from '@element-plus/icons-vue'
import { ElMessage, ElNotification } from 'element-plus'
import { useUserStore } from '@/store/modules/user'
const userStore = useUserStore()
const router = useRouter()

const username = ref<string>('')
const password = ref<string>('')
const loading = ref<boolean>(false)

// 登录
const handleSubmit = async () => {
  // 校验
  if (!username.value) {
    ElMessage.error('请输入用户名')
    return
  }
  if (!password.value) {
    ElMessage.error('请输入密码')
    return
  }
  // 登录
  try {
    loading.value = true
    await userStore.userLogin({
      username: username.value,
      password: password.value,
    })
    router.push('/')
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
