<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <Bread />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <ProductType />
        </el-row>
        <el-row>
          <ProductList />
        </el-row>
      </el-col>
      <el-col :span="5"> like </el-col>
    </el-row>
  </div>
</template>

<script>
import ProductList from "@/components/product/productList.vue";
import ProductType from "@/components/product/productType.vue";
import Bread from "@/components/product/bread.vue";
export default {
  components: {
    ProductList,
    ProductType,
    Bread,
  },
};
</script>

<style>
@import "@/assets/css/products/index.scss";
</style>
