<template>
  <div id="home">
    <h2>我是 {{ pageName }} 页面</h2>
      <router-link to="/detail">小米9</router-link>
      <br>
      <router-link to="/detail">华为p30</router-link>
      <hr>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      pageName: 'home'
    }
  }
}
</script>
