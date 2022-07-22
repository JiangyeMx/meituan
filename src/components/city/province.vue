<template>
  <div>
    <span class="name">按省份选择：</span>
    <Mselect
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
      className="province"
    />
    <Mselect
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      className="city"
    />
    <span>直接搜索:</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option
        v-for="item in searchList"
        :key="item"
        :label="item"
        :value="item"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
import api from "@/api/index.js";
import Mselect from "./select.vue";
export default {
  components: {
    Mselect,
  },
  data() {
    return {
      provinceList: [],
      province: "省份",
      provinceActive: false,
      cityList: [],
      city: "城市",
      cityActive: false,
      cityDisabled: true,
      searchWord: "",
      loading: false,
      searchList: [],
    };
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeProvince(item) {
      this.province = item.name;
      this.cityDisabled = false;
      this.cityList = item.cityInfoList;
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeCity(item) {
      this.city = item.name;
      this.$store.dispatch("setPosition", item);
      this.$router.push({ name: "index" });
    },
    remoteMethod() {},
  },
  created() {
    api.getProvinceList().then((res) => {
      this.provinceList = res.data.data.map((item) => {
        item.name = item.provinceName;
        return item;
      });
    });
  },
};
</script>

<style>
@import "@/assets/css/changecity/iselect.scss";
</style>
