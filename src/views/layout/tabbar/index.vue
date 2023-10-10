<template>
  <div class="tabbar">
    <div class="_left">
      <!-- 图标 -->
      <el-icon :size="20">
        <Expand></Expand>
      </el-icon>
      <!-- 面包屑 -->
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="_right">
      <!-- 按钮 -->
      <el-button size="small" icon="Refresh" circle />
      <el-button size="small" icon="FullScreen" circle />
      <el-button size="small" icon="Setting" circle />
      <!-- 用户头像 -->
      <img src="../../../../public/Logo.JPG" alt="" />
      <!-- 下拉菜单 -->
      <el-dropdown>
        <span class="el-dropdown-link">
          admin
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: '' }
</script>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
@import './scss/index.scss';
</style>
