<template>
  <div>我是首页</div>
</template>

<script lang="ts">
export default { name: '' }
</script>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useUserStore } from '@/store/modules/user'

// const userStore = useUserStore()
// onMounted(async () => {
//   // 获取用户信息
//   await userStore.getUserInfo()
// })
</script>
<style lang="scss" scoped></style>
