<template>
    <el-page-header :icon="null" title="返回" @back="back">
        <template #content>
            <div class="flex items-center">
                <el-avatar :size="32" class="mr-3" src="/ZRN1.jpg" />
                <span class="text-large font-600 mr-3"> 若楠管理系统 </span>
                <span class="text-sm mr-2" style="color: var(--el-text-color-regular)">
                    系统管理员
                </span>
                <el-tag>系统默认值</el-tag>
            </div>
        </template>
        <template #extra>
            <div class="flex items-center">
                <el-button>打印数据表</el-button>
                <el-button type="primary" class="ml-2">编辑</el-button>
            </div>
        </template>
    </el-page-header>
</template>

<script lang="ts" setup>
import router from '@/router';
function back() {
    console.log("back");
    router.push({ path: '/' })
}

</script>