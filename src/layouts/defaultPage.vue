<template>
  <div class="layout-default">
    <el-container>
      <el-header>
        <!-- <Header /> -->
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/header/index.vue";
import Footer from "@/components/footer/index.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style >
  @import "@/assets/css/public/layout.scss";
</style>
