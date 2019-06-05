<template>
  <div id="detail">
    <h2>我是 {{ pageName }} 页面</h2>
    <router-link to="home">返回主页</router-link>
    <br>
    <router-link to="/detail/mi9">点击查看小米9图片</router-link>
    <br>
    <router-link to="/detail/vmallp30">点击查看华为p30图片</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      pageName: 'detail'
    }
  }
}
</script>

<style lang="scss">
  .router-link-active{
    color: red;
  }
</style>
