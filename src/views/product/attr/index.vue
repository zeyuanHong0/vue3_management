<template>
  <div>
    <!-- 分类 -->
    <level-selector @getSelectedId="getSelectedId" />
    <!-- 主体 -->
    <el-card style="margin-top: 20px" v-loading="loading">
      <!-- 添加按钮 -->
      <el-button type="primary" icon="Plus">添加属性</el-button>
      <el-table border style="margin-top: 20px" :data="attrList">
        <el-table-column
          label="序号"
          type="index"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="attrName"
          label="属性名称"
          width="250"
        ></el-table-column>
        <el-table-column label="属性值名称">
          <template #default="{ row }">
            <template v-for="item in row.attrValueList" :key="item.attrId">
              <el-tag type="warning" style="margin-left: 4px">
                {{ item.valueName }}
              </el-tag>
            </template>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Attr',
}
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import levelSelector from '@/components/LevelSelector/levelSelector.vue'
import { ElMessage } from 'element-plus'
import { fetchAttrInfoList } from '@/api/product/attr'
import type { Attrs } from '@/api/product/attr/type'

const loading = ref<boolean>(false)
const attrList = ref<Attrs>([])
const category1Id = ref<number | undefined>(undefined)
const category2Id = ref<number | undefined>(undefined)
const category3Id = ref<number | undefined>(undefined)

// 获取选择的 id
const getSelectedId = (
  selectedCategory1Id: number,
  selectedCategory2Id: number,
  selectedCategory3Id: number,
) => {
  category1Id.value = selectedCategory1Id
  category2Id.value = selectedCategory2Id
  category3Id.value = selectedCategory3Id
  handleGetAttrInfoList()
}

// 获取属性详情列表
const handleGetAttrInfoList = async () => {
  loading.value = true
  try {
    const res = await fetchAttrInfoList(
      category1Id.value as number,
      category2Id.value as number,
      category3Id.value as number,
    )
    if (res.code === 200) {
      attrList.value = res.data
    } else {
      ElMessage.error(res.message)
    }
  } catch (error: any) {
    ElMessage.error(error)
  } finally {
    loading.value = false
  }
}
</script>
<style lang="scss" scoped></style>
