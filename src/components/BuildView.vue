<template>
    <el-table :data="filterTableData" style="width: 100%">
      <el-table-column label="楼栋id" prop="bid" />
      <el-table-column label="单元" prop="bunit" />
      <el-table-column label="楼层" prop="bfloor" />
      <el-table-column label="房屋号" prop="bnumber" />
      <el-table-column label="房屋面积" prop="barea" />
      <el-table-column align="right">
        <template #header="scope">
          <el-button text @click="dialogFormVisible = true" type="success">
      添加
    </el-button>
          <el-input v-model="search" size="small" placeholder="请搜索" />
        </template>
        <template #default="scope">
          <el-button text @click="handleEdit(scope.$index, scope.row)" type="primary" >编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="100" @update:current-page="chage" />
  
  
  
    <el-dialog v-model="dialogFormVisible" title="请输入您想要添加的数据" >
      <el-form :model="form" >
        <el-form-item label="楼栋id" :label-width="formLabelWidth">
          <el-input v-model="form.bid" autocomplete="off" />
        </el-form-item>
        <el-form-item label="单元" :label-width="formLabelWidth">
          <el-input v-model="form.bunit" autocomplete="off" />
        </el-form-item>
        <el-form-item label="楼层" :label-width="formLabelWidth">
          <el-input v-model="form.bfloor" autocomplete="off" />
        </el-form-item>
        <el-form-item label="房屋号" :label-width="formLabelWidth">
          <el-input v-model="form.bnumber" autocomplete="off" />
        </el-form-item>
        <el-form-item label="房屋面积" :label-width="formLabelWidth">
          <el-input v-model="form.barea" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="insertHandle">
            添加
          </el-button>
        </span>
      </template>
    </el-dialog>
    
  
  
    <el-dialog v-model="updateFormVisible" title="请输入您想要修改的数据" >
      <el-form :model="form" >
        <el-form-item label="楼栋id" :label-width="formLabelWidth">
          <el-input v-model="form.bid" autocomplete="off" />
        </el-form-item>
        <el-form-item label="单元" :label-width="formLabelWidth">
          <el-input v-model="form.bunit" autocomplete="off" />
        </el-form-item>
        <el-form-item label="楼层" :label-width="formLabelWidth">
          <el-input v-model="form.bfloor" autocomplete="off" />
        </el-form-item>
        <el-form-item label="房屋号" :label-width="formLabelWidth">
          <el-input v-model="form.bnumber" autocomplete="off" />
        </el-form-item>
        <el-form-item label="房屋面积" :label-width="formLabelWidth">
          <el-input v-model="form.barea" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="updateFormVisible = false">取消</el-button>
          <el-button type="primary" @click="handleupdate">
            修改
          </el-button>
        </span>
      </template>
    </el-dialog>
  </template>
  
  <script lang="ts" setup>
  import { computed, reactive, ref } from 'vue'
  const dialogFormVisible = ref(false)
  const updateFormVisible = ref(false)
  const formLabelWidth = '140px'
  import { ElMessage } from 'element-plus'
  import { deleteBuild, getAllBuild, insertBuild, updateBuild } from '@/components/api/login/buildApi'
  interface build {
    bid: number;
    bunit: string;
    bfloor: string;
    bnumber: string;
    barea: string;
  }
  const form = reactive({ 
    bid:'',
    bunit:'',
    bfloor:'',
    bnumber:'',
    barea:''
  })
  const tableData = ref<build[]>([])
  const addtableData = ref<build>()
  const search = ref('')
  const filterTableData = computed(() =>
    tableData.value.filter(
      (data) =>
        !search.value ||
        data.bunit.toLowerCase().includes(search.value.toLowerCase())
    )
  )
  
  const handleEdit = (index: number, row: build)=>{
    console.log(row)
    form.bid=String(row.bid),
    form.bunit=row.bunit,
    form.bfloor=row.bfloor,
    form.bnumber=row.bnumber,
    form.barea=row.barea,
    updateFormVisible.value = true
  }
  
  const handleupdate = () => {
    updateBuild(form).then(value=>{
      if (value.data.data != null && value.data.code == 200) {
        ElMessage({
          message: `修改成功！！！`,
          type: 'success',
        })
        refresh()
      } else {
        ElMessage({
          showClose: true,
          message: '朋友,你输入的不能为空哦！！！',
          type: 'error',
        })
      }
  
    })
  }
  const handleDelete = (index: number, row: build) => {
    deleteBuild(row.bid).then(value => {
      if (value.data.data != null && value.data.code == 200) {
        ElMessage({
          message: `删除${row.bid}成功！！！`,
          type: 'success',
        })
        refresh()
      } else {
        ElMessage({
          showClose: true,
          message: '朋友,你输入的不能为空哦！！！',
          type: 'error',
        })
      }
    })
  }
  const insertHandle = () => {
    console.log(form)
     insertBuild(form).then(value =>{
      if(value.data.data != null && value.data.code == 200){
        ElMessage({
          message: '添加成功！！！',
          type: 'success',
        })
        refresh()
      }else{
        ElMessage({
          message: '添加失败！！！'
        })
      }
     }
     )
     dialogFormVisible.value = false
  }
  const refresh = () => {
    getAllBuild(10, 1).then(value => {
      tableData.value = value.data.data.records
    })
  }
  
  refresh()
  //分页
  const chage = (value: number)=>{
    getAllBuild(10, value).then(value => {
      tableData.value = value.data.data.records
    })
  }
  </script>
  <style scoped>
  .el-button--text {
    margin-right: 15px;
  }
  .el-select {
    width: 300px;
  }
  .el-input {
    width: 300px;
  }
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
  </style>