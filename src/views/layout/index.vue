<template>
  <div class="layout_container">
    <!-- 左侧菜单栏 -->
    <div class="layout_menu" :class="settingStore.isFold ? 'fold' : ''">
      <!-- logo -->
      <Logo />
      <!-- 菜单内容 -->
      <el-scrollbar class="scrollbar">
        <el-menu
          :default-active="$route.path"
          :collapse="settingStore.isFold"
          :collapse-transition="false"
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
    <div class="layout_tabbar" :class="settingStore.isFold ? 'fold' : ''">
      <Tabbar />
    </div>
    <!-- 右侧内容 -->
    <div class="layout_content" :class="settingStore.isFold ? 'fold' : ''">
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
import { useSettingsStore } from '@/store/modules/settings'

const $route = useRoute() // 通过 useRoute() 获取当前路由信息
const userStore = useUserStore()
const settingStore = useSettingsStore()
</script>
<style lang="scss" scoped>
@import './scss/index.scss';
</style>
