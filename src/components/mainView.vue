<script setup lang="ts">
import { ref } from "vue"
import Header from '@/components/header.vue'
import Container from '@/components/container.vue'
import ShowEmployments from '@/components/ShowEmployments.vue'
// import BuildView from '@/components/bulidView.vue'
const webSiteTree: { [key: string]: any } = {
    '1': ShowEmployments,
    //  '2': BuildView
}
const currentTab = ref<string>('1')
const updateHandle = (index: string) => {
    currentTab.value = index
}

</script>


<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="300px"><Container @update=updateHandle></Container></el-aside>
        <el-container>
          <el-main><component :is="webSiteTree[currentTab]"></component></el-main>
          <el-footer></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>