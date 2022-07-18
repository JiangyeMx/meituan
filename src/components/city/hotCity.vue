<template>
  <div class="m-hcity">
    <dl>
      <dt>{{title}}</dt>
      <dd v-for="(item,i) in list" :key="i">
        {{item}}
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
    props: [
    'title',
    'list'
  ]
};
</script>

<style>
@import "@/assets/css/changecity/hot.scss";
</style>
