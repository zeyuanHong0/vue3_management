<template>
  <div class="layout_container">
    <!-- 左侧菜单栏 -->
    <div class="layout_menu">
      <!-- logo -->
      <logo />
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
