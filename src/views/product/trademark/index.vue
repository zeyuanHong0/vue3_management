<template>
  <el-card class="box-card">
    <!-- 添加按钮 -->
    <el-button
      icon="Plus"
      type="primary"
      size="default"
      @click="showAddTrademark"
    >
      添加品牌
    </el-button>
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

  <!-- 添加品牌弹窗 -->
  <el-dialog
    v-model="isShowAddTrademark"
    @close="closeAddTrademark"
    width="50%"
    title="添加品牌"
  >
    <el-form
      ref="trademarkFormRef"
      :model="trademarkForm"
      :rules="rules"
      :label-position="right"
    >
      <el-form-item label="品牌名称" prop="tmName">
        <el-input v-model="trademarkForm.tmName" placeholder="请输入品牌名称" />
      </el-form-item>
      <el-form-item label="品牌LOGO" prop="logoUrl">
        <el-upload
          v-loading="logoLoading"
          class="avatar-uploader"
          :show-file-list="false"
          :http-request="uploadLogo"
          accept="image/*"
        >
          <img
            v-if="trademarkForm.logoUrl"
            :src="trademarkForm.logoUrl"
            class="avatar"
          />
          <el-icon v-else class="avatar-uploader-icon">
            <upload-filled />
          </el-icon>
        </el-upload>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closeAddTrademark">取消</el-button>
        <el-button type="primary" @click="addTrademark">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
export default { name: '' }
</script>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import { fetchTrademarkList } from '@/api/product/trademark'
import { fetchUploadFile } from '@/api/file'
import type {
  Records,
  TradeMarkResponsedata,
  Trademark,
} from '@/api/product/trademark/type'

const trademarkList = ref<Records>([])
const currentPage = ref<number>(1)
const pageSize = ref<number>(3)
const total = ref<number>(0)
const trademarkFormRef = ref<FormInstance>()
const isShowAddTrademark = ref<boolean>(false) // 是否显示添加品牌弹窗
const logoLoading = ref<boolean>(false)
const trademarkForm = ref<Trademark>({
  // 品牌表单
  tmName: '',
  logoUrl: '',
})

const rules = reactive<FormRules>({
  tmName: [
    { required: true, message: '请输入品牌名称', trigger: 'blur' },
    { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' },
  ],
  logoUrl: [{ required: true, message: '请上传品牌LOGO', trigger: 'change' }],
})

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

//打开添加品牌弹窗
const showAddTrademark = () => {
  isShowAddTrademark.value = true
}

// 关闭添加品牌弹窗
const closeAddTrademark = () => {
  isShowAddTrademark.value = false
  // 清空
  trademarkForm.value.tmName = ''
  trademarkForm.value.logoUrl = ''
}

// 上传品牌 logo
const uploadLogo = async ({ file }: any) => {
  // 大小不超过 4MB
  if (file.size / 1024 / 1024 > 4) {
    ElMessage.error('上传文件大小不能超过 4MB!')
    return
  }
  // 上传图片到服务器
  logoLoading.value = true
  try {
    const res = await fetchUploadFile(file)
    if (res.code === 200) {
      trademarkForm.value.logoUrl = res.data
    } else {
      ElMessage.error(res.message)
    }
  } catch (error: any) {
    ElMessage.error(error)
  } finally {
    logoLoading.value = false
  }
}
</script>
<style lang="scss" scoped>
.avatar {
  width: 180px;
  height: 180px;
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
