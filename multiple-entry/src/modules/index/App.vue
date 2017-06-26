<template>
  <div>
    <div class="big-img2"></div>
    <router-view></router-view>
  </div>
</template>

<script>
  //  import loginApi from '@/api/login'
  export default {
    name: 'app'
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../../../static/css/comm.scss';

  .big-img2 {
    height: 40px;
    width: 40px;
  }

  .big-img2 {
    background: url("../../assets/big/landscape2.jpeg") no-repeat center;
    background-size: 40px;
  }
</style>
