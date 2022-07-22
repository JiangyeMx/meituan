<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <!-- 左侧图标 -->
      <el-col :span="3" class="left">
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
          alt="美团"
        />
      </el-col>
      <!-- 中间搜索框 -->
      <el-col class="center" :span="15">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="搜索商家或地点"
            @focus="focusInput"
            @blur="blurInput"
            @input="input"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>

          <!-- 地点列表 -->
          <dl class="hostPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlaceList" :key="item + '_' + index">
              <router-link :to="{ name: 'goods', params: { name: item } }">{{
                item
              }}</router-link>
            </dd>
          </dl>
          <!-- 搜索联想词 -->
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item, index) in searchList" :key="index">
              <router-link :to="{ name: 'goods', params: { name: item } }">{{
                item
              }}</router-link>
            </dd>
          </dl>
        </div>
        <!-- 建议 -->
        <p class="suggest">
          <router-link
            v-for="(item, index) in suggestList"
            :key="item + '~' + index"
            :to="{ name: 'goods', params: { name: item } }"
            >{{ item }}</router-link
          >
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      searchWord: "",
      hotPlaceList: [],
      searchList: [],
      suggestList: [],
      isFocus: false,
    };
  },
  computed: {
    isHotPlace() {
      return !this.searchWord && this.isFocus;
    },
    isSearchList() {
      return this.searchWord && this.isFocus;
    },
  },
  methods: {
    focusInput() {
      this.isFocus = true;
    },
    blurInput() {
      let This = this;
      setTimeout(function () {
        This.isFocus = false;
      }, 200);
    },
    input() {
      const val = this.searchWord;
      api.getSearchList().then((res) => {
        // 过滤掉搜索词中的含有对应关键字的词语
        this.searchList = res.data.data.list.filter((item, index) => {
          return item.indexOf(val) > -1;
        });
      });
    },
  },
  created() {
    api.searchHotWords().then((res) => {
      this.hotPlaceList = res.data.data;
      this.suggestList = res.data.data;
    });
  },
};
</script>

<style>
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>
