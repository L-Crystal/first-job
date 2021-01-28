<template>
  <div id="app">
    <ComHeader></ComHeader>
    <router-view />
    <ComFooter></ComFooter>
  </div>
</template>



<script>
import ComHeader from './components/ComHeader';
import ComFooter from '@/components/ComFooter';//@:对src的引用
export default {
  components: {
    ComHeader,
    ComFooter,
  },
}
</script>




<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #ffffff;
  }
}
</style>
