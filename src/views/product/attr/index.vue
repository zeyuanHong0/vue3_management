<template>
  <div>
    <!-- 分类 -->
    <level-selector
      @getSelectedId="getSelectedId"
      :readonly="!showDisplayArea"
    />
    <!-- 主体 -->
    <el-card style="margin-top: 20px" v-loading="loading">
      <!-- 展示表格 -->
      <div v-show="showDisplayArea">
        <!-- 添加按钮 -->
        <el-button
          type="primary"
          icon="Plus"
          :disabled="!category3Id"
          @click="showAdd"
        >
          添加属性
        </el-button>
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
                <el-tag type="success" style="margin-left: 6px">
                  {{ item.valueName }}
                </el-tag>
              </template>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="150">
            <template #default="{ row }">
              <!-- 编辑 -->
              <el-button
                type="primary"
                size="small"
                icon="Edit"
                @click="handleEdit(row)"
              ></el-button>
              <!-- 删除 -->
              <el-popconfirm
                :title="`确定删除${row.attrName}吗?`"
                @confirm="handleDelete(row.id)"
                icon="Delete"
                width="180"
              >
                <template #reference>
                  <el-button
                    type="danger"
                    size="small"
                    icon="Delete"
                  ></el-button>
                </template>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- 添加和修改区域 -->
      <div v-show="!showDisplayArea">
        <!-- 属性名称 -->
        <el-form :inline="true">
          <el-form-item label="属性名称">
            <el-input></el-input>
          </el-form-item>
        </el-form>
        <!-- 按钮 -->
        <el-button type="primary" icon="Plus">添加属性值</el-button>
        <el-button>取消</el-button>
        <!-- 表格 -->
        <el-table border style="margin-top: 10px" :data="attrList">
          <el-table-column
            label="序号"
            type="index"
            width="100"
          ></el-table-column>
          <el-table-column label="属性值名称">
            <template #default="{ row }">
              <template v-for="item in row.attrValueList" :key="item.attrId">
                <el-tag type="success" style="margin-left: 6px">
                  {{ item.valueName }}
                </el-tag>
              </template>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="150">
            <template #default="{ row }">
              <!-- 编辑 -->
              <el-button
                type="primary"
                size="small"
                icon="Edit"
                @click="handleEdit(row)"
              ></el-button>
              <!-- 删除 -->
              <el-popconfirm
                :title="`确定删除${row.attrName}吗?`"
                @confirm="handleDelete(row.id)"
                icon="Delete"
                width="180"
              >
                <template #reference>
                  <el-button
                    type="danger"
                    size="small"
                    icon="Delete"
                  ></el-button>
                </template>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <!-- 按钮 -->
        <div style="margin-top: 10px">
          <el-button type="primary" icon="Plus">保存</el-button>
          <el-button @click="cancelAdd">取消</el-button>
        </div>
      </div>
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
const showDisplayArea = ref<boolean>(true)

// 获取选择的 id
const getSelectedId = (
  selectedCategory1Id: number,
  selectedCategory2Id: number,
  selectedCategory3Id: number,
) => {
  category1Id.value = selectedCategory1Id
  category2Id.value = selectedCategory2Id
  category3Id.value = selectedCategory3Id
  if (category3Id.value) {
    handleGetAttrInfoList()
  } else {
    attrList.value = []
  }
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

// 展示添加属性区域
const showAdd = () => {
  showDisplayArea.value = false
}

// 取消添加
const cancelAdd = () => {
  showDisplayArea.value = true
}
</script>
<style lang="scss" scoped></style>
