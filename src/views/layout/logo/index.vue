<template>
  <div class="logo_container">
    <!-- 图标 -->
    <img src="../../../../public/Logo.JPG" alt="logo" />
    <!-- 文字 -->
    <p>哲理源后台管理</p>
  </div>
</template>

<script lang="ts">
export default { name: 'Logo' }
</script>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.logo_container {
  width: 100%;
  height: $base-menu-logo-height;
  // background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 16px;
  }
  p {
    font-size: 18px;
    margin-left: 10px;
    color: #fff;
  }
}
</style>
