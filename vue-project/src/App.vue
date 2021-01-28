<template>
  <div id="app">
    <router-link to="/">Course</router-link> |
    <router-link to="/about">About</router-link> | 
    <!-- <router-link :to="{ path:'/user',query:{name:'zyy',id:1000001 }}">User</router-link> -->
    <router-link :to="{name:'User',params:{ name:'zyy',id:1000001 }}">User</router-link> | 
    <router-link to="/detail/10000002/326">Course Detail</router-link> | 
    <router-link to="/test">Activity</router-link> | 
    <router-link to="/count">Count</router-link>
    <!-- 路由传参
        path + query : 地址栏[能]够看到参数，刷新页面参数[不丢失] 
        name + params : 地址栏[不能]够看到参数，刷新页面参数[丢失]
        url + params : 地址栏[能]够看到参数，刷新页面参数[不丢失]
    -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
