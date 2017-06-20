<template>
  <div class="Index-wrap">
    <h3>任务列表</h3>
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
  import indexApi from '@api/index'

  export default {
    components: {},
    data () {
      return {
        result: []
      }
    },
    mounted () {
      indexApi.getTaskList((result) => {
        this.result = result
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
</style>
