<template>
  <el-card class="box-card">
    <!-- 添加按钮 -->
    <el-button icon="Plus" type="primary" size="default">添加品牌</el-button>
    <!-- 表格 -->
    <el-table style="margin: 10px 0" :data="trademarkList" border>
      <el-table-column label="序号" width="80" align="center"></el-table-column>
      <el-table-column label="品牌名称"></el-table-column>
      <el-table-column label="品牌LOGO"></el-table-column>
      <el-table-column label="品牌操作"></el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[3, 5, 7, 9]"
      :disabled="disabled"
      :background="background"
      layout="prev, pager, next, jumper,->,sizes,total"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
</template>

<script lang="ts">
export default { name: '' }
</script>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const trademarkList = ref([])
const currentPage = ref<number>(1)
const pageSize = ref<number>(3)
const total = ref<number>(0)
</script>
<style lang="scss" scoped></style>
