<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="reload" />
    </transition>
  </router-view>
</template>

<script lang="ts">
export default { name: 'Main_Content' }
</script>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'
import { useSettingsStore } from '@/store/modules/settings'

const settingStore = useSettingsStore()

const reload = ref<boolean>(true)

// 监听isRefresh的变化
watch(
  () => settingStore.isRefresh,
  (val) => {
    reload.value = false
    // 通过nextTick()来确保dom更新完毕
    nextTick(() => {
      reload.value = true
    })
  },
)
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
