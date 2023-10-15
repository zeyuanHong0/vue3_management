<template>
  <div class="tabbar">
    <div class="_left">
      <!-- 图标 -->
      <el-icon :size="20" @click="changeIcon">
        <component :is="settingStore.isFold ? 'Fold' : 'Expand'"></component>
      </el-icon>
      <!-- 面包屑 -->
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item
          v-for="item in $route.matched"
          :key="item.path"
          :to="item.path"
          v-show="item.meta.title"
        >
          <!-- 图标 -->
          <el-icon :size="18">
            <component :is="item.meta.icon"></component>
          </el-icon>
          <!-- 名称 -->
          <span style="margin: 0px 3px">
            {{ item.meta.title }}
          </span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="_right">
      <!-- 按钮 -->
      <el-button
        size="small"
        icon="Refresh"
        circle
        @click="changeRefreshState"
      />
      <el-button
        size="small"
        icon="FullScreen"
        circle
        @click="changeFullScreen"
      />
      <el-button size="small" icon="Setting" circle />
      <!-- 用户头像 -->
      <img :src="userStore.avatar" alt="" />
      <!-- 下拉菜单 -->
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ userStore.username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'Tabbar' }
</script>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'
import { useUserStore } from '@/store/modules/user'
import { useSettingsStore } from '@/store/modules/settings'

const $route = useRoute() // 获取路由信息
const $router = useRouter() // 获取路由实例
const userStore = useUserStore() // 获取用户 store
const settingStore = useSettingsStore() // 获取设置 store

// 切换图标
const changeIcon = () => {
  settingStore.isFold = !settingStore.isFold
}

// 刷新
const changeRefreshState = () => {
  settingStore.isRefresh = !settingStore.isRefresh
}

// 实现全屏
const changeFullScreen = () => {
  const isFullScreen = document.fullscreenElement
  if (isFullScreen) {
    document.exitFullscreen()
  } else {
    document.documentElement.requestFullscreen()
  }
}

// 推出登录
const handleLogout = () => {
  userStore.userLogout()
  // 跳转到登录页
  $router.push({
    path: '/login',
    // 传递当前路由地址
    query: {
      redirect: $route.path,
    },
  })
}
</script>
<style lang="scss" scoped>
@import './scss/index.scss';
</style>
