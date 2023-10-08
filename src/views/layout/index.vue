<template>
  <div class="layout_container">
    <!-- 左侧菜单栏 -->
    <div class="layout_menu">
      <!-- logo -->
      <Logo />
      <!-- 菜单内容 -->
      <el-scrollbar class="scrollbar">
        <el-menu
          :default-active="activeIndex"
          class="my_el_menu"
          background-color="#001529"
          text-color="white"
          mode="vertical"
          @select="handleSelect"
        >
          <!-- 根据路由动态生成菜单 -->
          <Menu :menuList="userStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部 haeder -->
    <div class="layout_tabbar">顶部</div>
    <!-- 右侧内容 -->
    <div class="layout_content">内容</div>
  </div>
</template>

<script lang="ts">
export default { name: 'home' }
</script>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()
</script>
<style lang="scss" scoped>
@import './scss/index.scss';
</style>
