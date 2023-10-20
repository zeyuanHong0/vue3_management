<template>
  <el-card class="box-card">
    <!-- 添加按钮 -->
    <el-button icon="Plus" type="primary" size="default">添加品牌</el-button>
    <!-- 表格 -->
    <el-table style="margin: 10px 0" :data="trademarkList" border>
      <!-- 序号 -->
      <el-table-column
        label="序号"
        width="80"
        align="center"
        type="index"
      ></el-table-column>
      <!-- 品牌名称 -->
      <el-table-column label="品牌名称">
        <template #default="{ row }">
          <span>{{ row.tmName }}</span>
        </template>
      </el-table-column>
      <!-- 品牌LOGO -->
      <el-table-column label="品牌LOGO">
        <template #default="{ row }">
          <img :src="row.logoUrl" alt="" style="width: 120px; height: 100px" />
        </template>
      </el-table-column>
      <!-- 品牌操作 -->
      <el-table-column label="品牌操作">
        <template #default>
          <el-button type="warning" size="small" icon="Edit"></el-button>
          <el-button type="danger" size="small" icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :background="true"
      :pager-count="9"
      :page-sizes="[3, 5, 7, 9]"
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
import { ElMessage } from 'element-plus'
import { fetchTrademarkList } from '@/api/product/trademark'
import type {
  Records,
  TradeMarkResponsedata,
} from '@/api/product/trademark/type'

const trademarkList = ref<Records>([
  // {
  //   id: 1,
  //   createTime: '2021-12-10 01:31:41',
  //   updateTime: '2023-04-15 15:48:02',
  //   tmName: '小米',
  //   logoUrl:
  //     '39.98.123.211/group1/M00/03/D9/rBHu8mHmKC6AQ-j2AAAb72A3EO0942.jpg',
  // },
  // {
  //   id: 2,
  //   createTime: '2021-12-10 01:31:41',
  //   updateTime: '2023-04-15 15:48:21',
  //   tmName: '苹果',
  //   logoUrl:
  //     'http://39.98.123.211/group1/M00/03/D9/rBHu8mHmKHOADErHAAAQBezsFBo612.jpg',
  // },
  // {
  //   id: 3,
  //   createTime: '2021-12-10 01:31:41',
  //   updateTime: '2023-04-15 15:48:28',
  //   tmName: '华为',
  //   logoUrl:
  //     'http://39.98.123.211/group1/M00/03/D9/rBHu8mHmKF2AWpcKAADv98DWYRo516.jpg',
  // },
])
const currentPage = ref<number>(1)
const pageSize = ref<number>(3)
const total = ref<number>(0)

onMounted(async () => {
  handleGetTrademarkList()
})

// 获取品牌列表
const handleGetTrademarkList = async (page = 1) => {
  try {
    currentPage.value = page // 当前页(默认为第一页)
    const res: TradeMarkResponsedata = await fetchTrademarkList(
      currentPage.value,
      pageSize.value,
    )
    if (res.code === 200) {
      trademarkList.value = res.data.records
      total.value = res.data.total
    } else {
      ElMessage.error('获取品牌列表失败')
    }
  } catch (error: any) {
    // ElMessage.error(error)
  }
}

// 分页
const handleCurrentChange = (val: number) => {
  currentPage.value = val
  handleGetTrademarkList(currentPage.value)
}
// 每页条数
const handleSizeChange = (val: number) => {
  pageSize.value = val
  handleGetTrademarkList()
}
</script>
<style lang="scss" scoped></style>
