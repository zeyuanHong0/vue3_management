<template>
  <div class="layout_container">
    <!-- 左侧菜单栏 -->
    <div class="layout_menu">
      <!-- logo -->
      <Logo />
      <!-- 菜单内容 -->
      <el-scrollbar class="scrollbar">
        <el-menu
          :default-active="$route.path"
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
    <div class="layout_tabbar">
      <Tabbar />
    </div>
    <!-- 右侧内容 -->
    <div class="layout_content">
      <Main />
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'home' }
</script>

<script setup lang="ts">
// import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Tabbar from './tabbar/index.vue'
import Main from './main/index.vue'
import { useUserStore } from '@/store/modules/user'

const $route = useRoute() // 通过 useRoute() 获取当前路由信息
const userStore = useUserStore()
</script>
<style lang="scss" scoped>
@import './scss/index.scss';
</style>
