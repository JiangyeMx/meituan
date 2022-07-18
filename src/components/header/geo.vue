<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location"></i>
      <router-link :to="{ name: 'city', path: '/city' }" class="changeCity">
        切换城市
      </router-link>
    </div>

    <div class="m-user">
      <router-link to="/" class="login"> 立即登录 </router-link>
      <router-link to="/" class="register"> 注册 </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
