<template>
<el-col :span="24">
      <el-menu style="height: 600px;"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        @select="selectHandle"
      >
        <el-sub-menu index="1-1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1">员工管理</el-menu-item>
            <el-menu-item index="2">学生管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="3">楼栋管理</el-menu-item>
            <el-menu-item index="4">单元管理</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="1-2">
          <el-icon><icon-menu /></el-icon>
          <span>未开发</span>
        </el-menu-item>
        <el-menu-item index="1-3" disabled>
          <el-icon><document /></el-icon>
          <span>未开发</span>
        </el-menu-item>
        <el-menu-item index="1-4">
          <el-icon><setting /></el-icon>
          <span>未开发</span>
        </el-menu-item>
      </el-menu>
    </el-col>
</template>
<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const emit = defineEmits<{
  update: [indexPath: string]
}>()

const selectHandle = (index: string, indexPath: Array<number>) => {
  emit('update', index)
}
</script>