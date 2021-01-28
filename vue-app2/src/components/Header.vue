<template>
  <header :style="{ backgroundColor: curMenu.bgColor }">
    <span @click="goHome">《首页</span>
    {{ curMenu.name }}
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["curMenu"]),
  },
  methods: {
    ...mapMutations(["setCurMenu"]),
    goHome() {
      this.$router.push("/"),
        this.setCurMenu({
          name: "剧集",
          bgColor: "#D1BA74",
        });
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  font-size: 0.4rem;
  height: 1rem;
  width: 100%;
  z-index: 666;
  background: #d1ba74;
  text-align: center;
  line-height: 1rem;
  color: #686352;
  font-weight: bold;
  span {
    position: absolute;
    left: 0;
  }
}
</style>