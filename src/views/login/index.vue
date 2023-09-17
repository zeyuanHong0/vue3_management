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
            ></el-input>
          </el-form-item>
          <!-- 登录按钮 -->
          <el-form-item>
            <el-button class="login_button" type="primary">登录</el-button>
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
import { User, Lock } from '@element-plus/icons-vue'

const username = ref('')
const password = ref('')
</script>
<style lang="scss" scoped>
@import './scss/index.scss';
</style>
