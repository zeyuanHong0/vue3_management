<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
export default { name: 'Main_Content' }
</script>

<script setup lang="ts">
// import { ref, onMounted, watch } from 'vue'
</script>
<style lang="scss" scoped>
// 过渡动画
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  opacity: 1;
}
</style>
