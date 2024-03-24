<template>
  <div class="paginationBox">
    <el-pagination
      v-model:current-page="thisCurrentPage"
      v-model:page-size="thisPageSize"
      :background="true"
      :pager-count="9"
      :page-sizes="[3, 5, 7, 9]"
      layout="prev, pager, next, jumper,->,sizes,total"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Pagination',
}
</script>

<script setup lang="ts">
import { toRefs, computed } from 'vue'

const props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 3,
  },
})

const { total } = toRefs(props)

// 当前页数
const thisCurrentPage = computed({
  get() {
    return props.currentPage
  },
  set(value) {
    $emit('update:currentPage', value)
  },
})
// 每页显示条目个数
const thisPageSize = computed({
  get() {
    return props.pageSize
  },
  set(value) {
    $emit('update:pageSize', value)
  },
})

const $emit = defineEmits([
  'update:currentPage',
  'update:pageSize',
  'paginationChange',
])

const handleCurrentChange = () => {
  //   currentPage.value = val
  $emit('paginationChange')
}

const handleSizeChange = () => {
  //   pageSize.value = val
  $emit('paginationChange')
}
</script>

<style lang="scss" scoped></style>
