<template>
  <div class="page-changeCity">
    <el-row>
      <Province />
    </el-row>
    <el-row>
      <HotCity  title="热门城市"/>
    </el-row>
    <el-row>
      <HotCity  title="最近访问"/>
    </el-row>
    <el-row>
      <CityType />
    </el-row>
  </div>
</template>

<script>
import CityType from "@/components/city/cityType.vue";
import HotCity from "@/components/city/hotCity.vue";
import Province from "@/components/city/province.vue";
export default {
  components : {
    CityType,
    HotCity,
    Province,
  },
}
</script>

<style>

</style>