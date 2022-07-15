<template>
  <div class="m-header">
    <el-row>
      <TopBar />
    </el-row>
    <el-row>
      <Search />
    </el-row>
  </div>
</template>

<script>
import TopBar from './TopBar.vue'
import Search from './SearchBar.vue'
export default {
  components: {
    Search,
    TopBar
  }
}
</script>

<style>
@import "@/assets/css/public/header/topbar.scss";
</style>