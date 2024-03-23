<template>
  <el-card>
    <el-form :inline="true">
      <el-form-item label="一级分类">
        <el-select
          v-model="selectedFirstLevel"
          placeholder="请选择"
          @change="handleGetSecondLevel"
        >
          <el-option
            v-for="item in firstLevelList"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类">
        <el-select
          v-model="selectedSecondLevel"
          placeholder="请选择"
          @change="handleGetThirdLevel"
        >
          <el-option
            v-for="item in secondLevelList"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="三级分类">
        <el-select
          v-model="selectedThirdLevel"
          placeholder="请选择"
          @change="getAttrInfoList"
        >
          <el-option
            v-for="item in thirdLevelList"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts">
export default {
  name: 'LevelSelector',
}
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import {
  fetchProductCategory1,
  fetchProductCategory2,
  fetchProductCategory3,
} from '@/api/product/attr'
import type { Product } from '@/api/product/attr/type'

const selectedFirstLevel = ref<number | undefined>(undefined) //选中的一级分类
const selectedSecondLevel = ref<number | undefined>(undefined) //选中的二级分类
const selectedThirdLevel = ref<number | undefined>(undefined) //选中的三级分类
const firstLevelList = ref<Product[]>([])
const secondLevelList = ref<Product[]>([])
const thirdLevelList = ref<Product[]>([])

const $emit = defineEmits(['getSelectedId'])
// const props = defineProps({
//   firstLevelList: {
//     type: Array<Product>,
//     default: () => [],
//   },
//   secondLevelList: {
//     type: Array<Product>,
//     default: () => [],
//   },
//   thirdLevelList: {
//     type: Array<Product>,
//     default: () => [],
//   },
// })

onMounted(() => {
  handleGetFirstLevel()
})

// 获取一级分类
const handleGetFirstLevel = async () => {
  try {
    const res = await fetchProductCategory1()
    if (res.code === 200) {
      firstLevelList.value = res.data
    } else {
      ElMessage.error(res.message)
    }
  } catch (error: any) {
    ElMessage.error(error)
  }
}

// 获取二级分类
const handleGetSecondLevel = async () => {
  // 清空二、三级分类
  selectedSecondLevel.value = undefined
  selectedThirdLevel.value = undefined
  try {
    const res = await fetchProductCategory2(selectedFirstLevel.value as number)
    if (res.code === 200) {
      secondLevelList.value = res.data
    } else {
      ElMessage.error(res.message)
    }
  } catch (error: any) {
    ElMessage.error(error)
  }
}

// 获取三级分类
const handleGetThirdLevel = async () => {
  // 清空三级分类
  selectedThirdLevel.value = undefined
  try {
    const res = await fetchProductCategory3(selectedSecondLevel.value as number)
    if (res.code === 200) {
      thirdLevelList.value = res.data
    } else {
      ElMessage.error(res.message)
    }
  } catch (error: any) {
    ElMessage.error(error)
  }
}

// 获取属性详情列表
const getAttrInfoList = () => {
  $emit(
    'getSelectedId',
    selectedFirstLevel.value,
    selectedSecondLevel.value,
    selectedThirdLevel.value,
  )
}
</script>

<style lang="scss" scoped></style>
