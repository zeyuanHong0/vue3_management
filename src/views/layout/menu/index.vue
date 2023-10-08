<template>
  <!-- <div>{{ props.menuList }}</div> -->
  <template v-for="(item, index) in menuList" :key="item.path">
    <!-- 没有子路由的菜单展示 -->
    <template v-if="!item.children">
      <el-menu-item v-if="!item.meta.hidden" :index="item.path">
        <template #title>
          {{ item.meta.title }}
        </template>
      </el-menu-item>
    </template>

    <!-- 只有一个子路由的菜单展示 -->
    <template v-if="item.children?.length === 1">
      <el-menu-item v-if="!item.meta.hidden" :index="item.children[0].path">
        <template #title>
          {{ item.children[0].meta.title }}
        </template>
      </el-menu-item>
    </template>

    <!-- 有子路由且数量大于1个 -->
    <el-sub-menu v-if="item.children?.length > 1" :index="item.path">
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children" />
    </el-sub-menu>
  </template>
</template>

<script lang="ts">
// eslint-disable-next-line vue/no-reserved-component-names
export default { name: 'Menu' }
</script>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
const props = defineProps({
  menuList: {
    type: Array,
    default: () => [],
  },
})
</script>
<style lang="scss" scoped></style>
