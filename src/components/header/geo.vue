<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location"></i>
      {{ $store.state.position.name }}
      <router-link :to="{ name: 'city', path: '/city' }" class="changeCity">
        切换城市
      </router-link>
      [
      <a href="#" v-for="(item, index) in nearCity" :key="index">
        {{ item.name }}
      </a>
      ]
    </div>

    <div class="m-user" v-if="!$store.state.userName">
      <router-link to="/" class="login"> 立即登录 </router-link>
      <router-link to="/" class="register"> 注册 </router-link>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      nearCity: [],
    };
  },
  watch: {
    "$store.state.position.city": function () {
      this.nearCity = this.$store.state.position.nearcity;
    },
  },
  created() {
    api.getCurPosition().then((res) => {
      this.$store.dispatch("setPosition", res.data.data);
      this.nearCity = res.data.data.nearcity;
    });
  },
};
</script>

<style></style>
