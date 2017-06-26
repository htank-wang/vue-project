<template>
  <div class="Index-wrap">
    <section>
      <h3>compontents</h3>
      <div class="rangWrap" style="margin: 0 30px;">
        <div style="height: 50px" class="testwww">
          <span style="width: 40px;height:30px;display: inline-block;border: 1px solid red"></span>
          <span style="width: 40px;height:30px;display: inline-block;border: 1px solid red"></span>
          <span style="width: 40px;height:30px;display: inline-block;border: 1px solid red"></span>
          <span style="width: 40px;height:30px;display: inline-block;border: 1px solid red"></span>
          <span style="width: 40px;height:30px;display: inline-block;border: 1px solid red"></span>
          <span style="width: 40px;height:30px;display: inline-block;border: 1px solid red"></span>
          <span style="width: 40px;height:30px;display: inline-block;border: 1px solid red"></span>
          <span style="width: 40px;height:30px;display: inline-block;border: 1px solid red"></span>
          <span style="width: 40px;height:30px;display: inline-block;border: 1px solid red"></span>
          <span style="width: 40px;height:30px;display: inline-block;border: 1px solid red"></span>
        </div>
        <mt-range
          v-model="rangeValue"
          :step="10"
          :bar-height="2">
        </mt-range>
      </div>
    </section>
    <section>
      <h3>bing img</h3>
      <div>
        <span class="vue-icon icon-add"></span>
        <span class="vue-icon icon-search"></span>
        <span class="vue-icon icon-loading"></span>
      </div>
    </section>

    <section>
      <h3>bing img</h3>
      <div>
        <div class="big-img"><img src="../../assets/big/landscape.jpeg"/></div>
        <div class="big-img2"></div>
      </div>
    </section>

    <h3>任务列表</h3>
    <img src="../../assets/logo.png"/>
    <p>总记录数:{{result.total}}</p>
    <table>
      <thead>
      <tr>
        <th>任务id</th>
        <th>任务名称</th>
        <th>任务描述</th>
        <th>创建时间</th>
        <th>创建者</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in result.list">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.description}}</td>
        <td>{{item.createTime}}</td>
        <td>{{item.user}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Vue from 'vue'
  import indexApi from '@api/index'
  import {Range} from 'mint-ui'
  Vue.component(Range.name, Range)

  export default {
    components: {Range},
    data () {
      return {
        result: [],
        rangeValue: 0
      }
    },
    mounted () {
      indexApi.getTaskList((result) => {
        this.result = result
      })

      require.ensure(['../../../static/js/zepto/zepto.min.js'], (zepto) => {
        // do something
        console.log(zepto)
      })
    },
    methods: {
      doBack () {

      }
    }
  }
</script>


<style rel="stylesheet/scss" lang="scss" rescoped>
  .Index-wrap {
    table {
      width: 100%;
      border: 1px solid #999;
      td, th {
        border: 1px solid #999;
      }
    }
  }

  .rangWrap {
    height: 200px;
    width: 400px;
    border: 1px solid red;
  }

  .testwww {
    overflow: hidden;
    > span {
      float: left;
      width: 38px !important;
    }
  }

  .vue-icon {
    display: inline-block;
    height: 30px;
    width: 30px;
    background-size: 30px;
    &.icon-add {
      background: url("../../assets/small/icon-add.png") no-repeat center;
    }
    &.icon-search {
      background: url("../../assets/small/icon-add.png") no-repeat center;
    }
    &.icon-loading {
      background: url("../../assets/small/loading.gif") no-repeat center;
      background-size: 16px;
    }
  }

  .big-img, .big-img2 {
    height: 40px;
    width: 40px;
    img {
      width: 100%;
      height: 100%;
      border: none;
    }
  }

  .big-img2 {
    background: url("../../assets/big/landscape2.jpeg") no-repeat center;
    background-size: 40px;
  }

</style>
