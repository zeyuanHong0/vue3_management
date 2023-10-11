<template>
  <div class="logo_container">
    <!-- 图标 -->
    <img src="../../../../public/Logo.JPG" alt="logo" />
    <!-- 文字 -->
    <p :class="settingStore.isFold ? 'hideWord' : ''">哲理源后台管理</p>
  </div>
</template>

<script lang="ts">
export default { name: 'Logo' }
</script>

<script setup lang="ts">
import { useSettingsStore } from '@/store/modules/settings'

const settingStore = useSettingsStore() // 获取设置 store
</script>
<style lang="scss" scoped>
.logo_container {
  width: 100%;
  height: $base-menu-logo-height;
  // background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 36px;
    height: 36px;
    border-radius: 16px;
  }
  p {
    font-size: 18px;
    margin-left: 10px;
    color: #fff;
  }
  .hideWord {
    display: none;
  }
}
</style>
