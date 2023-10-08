<template>
  <div class="layout_container">
    <!-- 左侧菜单栏 -->
    <div class="layout_menu">
      <!-- logo -->
      <logo />
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
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">数据大屏</el-menu-item>
          <!-- 折叠菜单 -->
          <el-sub-menu index="3">
            <template #title>
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="3-1">用户管理</el-menu-item>
            <el-menu-item index="3-2">角色管理</el-menu-item>
            <el-menu-item index="3-3">菜单管理</el-menu-item>
          </el-sub-menu>
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

import logo from './logo/index.vue'
</script>
<style lang="scss" scoped>
@import './scss/index.scss';
</style>
