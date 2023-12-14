<script setup lang="ts">
import { loginApi } from '@/components/api/login/loginApi';
import router from '@/router';
import { reactive } from 'vue';
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
const input = ref('')
const userModel = reactive({
  username: '',
  password:'',
  loginname:''
})

function login(){
  console.log("login first");
  loginApi(userModel).then(value =>{
    if(value.data.data!=null&&value.data.code ==200){
      const id = value.data.data.uid;
      const username = value.data.data.username;
      router.push({path:'/main',query:{id:id,username:username}})
    }else{
      ElMessage({
    showClose: true,
    message: '朋友,你输入的不能为空哦！！！',
    type: 'error',
  })
    }
  })
}
</script>

<template>
      <div class="bg">
      <el-form :model="userModel" label-width="120px" size="large" style="padding:60px 60px 20px 0px;background-color: rgba(150,150,150,0.7);">
        <el-form-item label="用户名:" >
          <el-input v-model="userModel.username" placeholder="请输入用户名" style="min-width: 300px;"/>
        </el-form-item>
        <el-form-item label="密码:">
            <el-input v-model="userModel.password" type="password" placeholder="请输入密码" show-password/>
        </el-form-item>
        <el-form-item>
          <el-col :span="10" :offset="6">
          <el-button type="primary" @click="login()" >登录</el-button>
          </el-col>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>
<style scoped>
   
    .bg{
      background-image: url("/OIP-C.jpg");
      background-repeat: no-repeat;
      background-size: 100%;
      height: 100%;
      min-height: 800px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
			background-attachment: fixed;
      background-size: 100% 100%;
				background-attachment: fixed;

    }
    
</style>