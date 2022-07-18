<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="handleMouseLeave">
      <dt>全部分类</dt>
      <dd
        v-for="(item, i) in menuList"
        :key="i"
        @mouseenter="handleMouseEnter(item)"
      >
        <i :class="item.type"></i>
        {{ item.name }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div
      class="detail"
      v-if="currentDetail"
      @mouseenter="handleDetailEnter"
      @mouseleave="handleDetailLeave"
    >
      <template v-for="(item, i) in currentDetail.items">
        <h4 :key="i">{{ item.title }}</h4>
        <span v-for="(it, index) in item.items" :key="it + '_' + index">
          {{ it }}
        </span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [],
      currentDetail: null,
    };
  },
  methods: {
    handleMouseEnter(item) {
      this.currentDetail = item;
    },
    handleMouseLeave() {
      let This = this;
      setTimeout(function () {
        This.currentDetail = null;
      }, 300);
    },
    handleDetailEnter() {
      clearTimeout(this.timer);
    },
    handleDetailLeave() {
      this.currentDetail = null;
    },
  },
};
</script>

<style></style>
