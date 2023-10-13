<template>
  <template v-for="(item, index) in menuList" :key="item.path">
    <!-- 没有子路由的菜单展示 -->
    <template v-if="!item.children">
      <el-menu-item
        v-if="!item.meta.hidden"
        :index="item.path"
        @click="handleToRoute"
      >
        <el-icon>
          <!-- 渲染动态组件 -->
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <!-- 只有一个子路由的菜单展示 -->
    <template v-if="item.children?.length === 1">
      <el-menu-item
        v-if="!item.meta.hidden"
        :index="item.children[0].path"
        @click="handleToRoute"
      >
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <!-- 有子路由且数量大于1个 -->
    <el-sub-menu
      v-if="item.children?.length > 1"
      :index="item.path"
      @click="handleToRoute"
    >
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
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
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  menuList: {
    type: Array,
    default: () => [],
  },
})

// 点击菜单的事件
const handleToRoute = (vc: any) => {
  console.log(vc)
  // 路由跳转
  if (vc.index) {
    router.push(vc.index)
  }
}
</script>
<style lang="scss" scoped></style>
