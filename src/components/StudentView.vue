<template>
    <el-table :data="filterTableData" style="width: 100%">
      <el-table-column label="学生Id" prop="eid" />
      <el-table-column label="学生姓名" prop="ename" />
      <el-table-column label="学生年龄" prop="eage" />
      <el-table-column label="学生学号" prop="idcard" />
      <el-table-column label="学生联系方式" prop="eaddr" />
      <el-table-column label="性别" prop="sex" />
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
        <el-form-item label="学生id" :label-width="formLabelWidth">
          <el-input v-model="form.eid" autocomplete="off" />
        </el-form-item>
        <el-form-item label="学生姓名" :label-width="formLabelWidth">
          <el-input v-model="form.ename" autocomplete="off" />
        </el-form-item>
        <el-form-item label="学生年龄" :label-width="formLabelWidth">
          <el-input v-model="form.eage" autocomplete="off" />
        </el-form-item>
        <el-form-item label="学生学号" :label-width="formLabelWidth">
          <el-input v-model="form.idcard" autocomplete="off" />
        </el-form-item>
        <el-form-item label="学生联系方式" :label-width="formLabelWidth">
          <el-input v-model="form.eaddr" autocomplete="off" />
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-input v-model="form.sex" autocomplete="off" />
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
        <el-form-item label="学生id" :label-width="formLabelWidth">
          <el-input v-model="form.eid" autocomplete="off" />
        </el-form-item>
        <el-form-item label="学生姓名" :label-width="formLabelWidth">
          <el-input v-model="form.ename" autocomplete="off" />
        </el-form-item>
        <el-form-item label="学生年龄" :label-width="formLabelWidth">
          <el-input v-model="form.eage" autocomplete="off" />
        </el-form-item>
        <el-form-item label="学生学号" :label-width="formLabelWidth">
          <el-input v-model="form.idcard" autocomplete="off" />
        </el-form-item>
        <el-form-item label="学生联系方式" :label-width="formLabelWidth">
          <el-input v-model="form.eaddr" autocomplete="off" />
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-input v-model="form.sex" autocomplete="off" />
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
  import { deleteEmployment, getAllEmployments, insertEmployment, updateEmployment } from '@/components/api/login/employmentApi'
  interface employment {
    eid: number;
    ename: string;
    eage: string;
    idcard: string;
    eaddr: string;
    sex: string;
  }
  const form = reactive({ 
    eid:'',
    ename:'',
    eage:'',
    idcard:'',
    eaddr:'',
    sex:''
  })
  const tableData = ref<employment[]>([])
  const addtableData = ref<employment>()
  const search = ref('')
  const filterTableData = computed(() =>
    tableData.value.filter(
      (data) =>
        !search.value ||
        data.ename.toLowerCase().includes(search.value.toLowerCase())
    )
  )
  
  const handleEdit = (index: number, row: employment)=>{
    console.log(row)
    form.eid=String(row.eid),
    form.ename=row.ename,
    form.eage=row.eage,
    form.ename=row.ename,
    form.idcard=row.idcard,
    form.eaddr=row.eaddr,
    form.sex=row.sex
    updateFormVisible.value = true
  }
  
  const handleupdate = () => {
    updateEmployment(form).then(value=>{
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
  const handleDelete = (index: number, row: employment) => {
    deleteEmployment(row.eid).then(value => {
      if (value.data.data != null && value.data.code == 200) {
        ElMessage({
          message: `删除${row.eid}成功！！！`,
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
     insertEmployment(form).then(value =>{
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
    getAllEmployments(10, 1).then(value => {
      tableData.value = value.data.data.records
    })
  }
  
  refresh()
  //分页
  const chage = (value: number)=>{
    getAllEmployments(10, value).then(value => {
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