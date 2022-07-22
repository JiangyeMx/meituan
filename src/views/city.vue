<template>
  <div class="page-changeCity">
    <el-row>
      <Province />
    </el-row>
    <el-row>
      <HotCity  title="热门城市" :list="hotList"/>
    </el-row>
    <el-row>
      <HotCity  title="最近访问" :list="nearList"/>
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
import api from "@/api/index.js";
export default {
  components : {
    CityType,
    HotCity,
    Province,
  },
  data(){
    return {
      hotList : [],
      nearList : [],
    }
  },
  created(){
    api.getHotCity().then((res) => {
      this.hotList = res.data.data.map((item)=>{
        return item.name;
      })
    });
    api.getRecentCity().then((res) => {
      this.nearList = res.data.data.map((item)=>{
        return item.name;
      })
    });
  },
}
</script>

<style>

</style>