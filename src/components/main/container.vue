<template>
  <div class="m-istyle">
    <dl :class="nav.list" @mouseover="handleMOuseOver">
      <dt>{{ nav.title }}</dt>
    </dl>
    <dd
      v-for="(item, i) in nav.list"
      :key="i"
      :class="{ active: kind === item.tab }"
      :data-type="item.tab"
    >
      {{ item.text }}
    </dd>
    <ul class="ibody">
      <li v-for="(item, i) in resData[kind]" :key="i">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{ item.title }}</div>
            <div class="sub-title" :title="item.sub_title">
              {{ item.sub_title }}
            </div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{ item.price }}</span>
              </span>
              <span class="sold bottom-right-info">{{ item.address }}</span>
              <!-- <span class="old-price">门市价¥{{item.price_info.old_price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span> -->
            </div>
            <!-- <div class="price-info" v-else-if="!item.rentNum">
                <span class="current-price-wrapper">
                    <span class="price-symbol numfont">¥</span>
                    <span class="current-price numfont">抢光了</span>
                </span>
            </div>
            <div class="price-info" v-else>
                <span class="current-price-wrapper">
                    <span class="price-symbol numfont">¥</span>
                    <span class="current-price numfont">{{item.price_info.avg_price}}</span>
                    <span class="units">/{{item.price_info.units}}均</span>
                </span>
            </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      kind: "all",
      resData: [],
    };
  },
  props: ["nav"],
  methods: {
    handleMOuseOver(e) {
      const dom = e.target;
      const tagName = dom.tagName.toLowerCase();
      if (tagName !== "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
    },
  },
  created(){
    api.resultsByKeywords(this.nav.title).then(res => {
      this.resData = res.data.data;
    });
  },
};
</script>

<style>
@import "@/assets/css/index/artistic.scss";
</style>
