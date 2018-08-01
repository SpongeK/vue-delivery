<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="nav">
      <div class="nav-item"><router-link to="goods">商品</router-link></div>
      <div class="nav-item"><router-link to="ratings">评价</router-link></div>
      <div class="nav-item"><router-link to="sellers">商家</router-link></div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
import Header from './components/header'

import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    'v-header': Header
  },
  created () {
    axios.get('/good/seller').then(res => {
      if(res.data.code === 0) {
        this.seller = res.data.data
      }
    })
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
.nav {
  display: flex;
  justify-content: center;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  .nav-item{
    flex-grow: 1;
    text-align: center;
    a{
      color: rgb(77,85,93);
      font-size: 14px;
    }
    &.active a{
     color: rgb(240, 20, 20);
    }
  }
}
</style>
