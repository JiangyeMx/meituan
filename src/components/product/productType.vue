<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="item in classicList" :key="item.type">
        <Mselect :name="item.title" :list="item.sub_list" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="item in areaList" :key="item.type">
        <Mselect :name="item.title" :list="item.sub_list" />
      </dd>
    </dl>
  </div>
</template>

<script>
import Mselect from "./productSelect.vue";
export default {
  components: {
    Mselect,
  },
  data() {
    return {
      classicList: [
        {
          title: "美食",
          type: "food",
          sub_list: [
            {
              name: "日本菜",
              id: "Japan",
            },
            {
              name: "饮品店",
              id: "drink",
            },
            {
              name: "面包甜点",
              id: "cate",
            },
          ],
        },
      ],
      areaList: [
        {
          title: "推荐商圈",
          sub_list: [
            {
              name: "望京",

              id: 120000,
            },

            {
              name: "昌平",

              id: 12222,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
