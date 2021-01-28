<template>
  <div id="app">
    <ComHeader></ComHeader>
    <div id="container">
    <router-view />
    </div>
    <ComFooter></ComFooter>
  </div>
</template>

<script>
import ComHeader from './components/Header';
import ComFooter from '@/components/Footer';
export default {
  components: {
    ComHeader,
    ComFooter,
  }
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
  color: #686352;

  &.router-link-exact-active {
    color: #fdfcdd;
  }
}
#container{
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
