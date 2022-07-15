<template>
  <el-row class="m-header-topbar m-header">
    <el-col :span="10">
      <Geo />
    </el-col>
    <el-col :span="14">
      <MNav />
    </el-col>
  </el-row>
</template>

<script>
import Geo from "./geo.vue";
import MNav from "./nav.vue";
export default {
  components: {
    Geo,
    MNav,
  },
};
</script>

<style>
    @import "@/assets/css/public/header/topbar.scss";
</style>
