<template>
  <footer :style="{ backgroundColor: curMenu.bgColor }">
    <div v-for="menu in FullMenu" :key="menu.path" @click="switchMenu(menu)">
      <router-link :to="menu.path" >{{ menu.name }}</router-link>
    </div>
  </footer>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["curMenu"]),
  },
  data() {
    return {
      FullMenu: [
        { path: "/", name: "剧集", bgColor: "#D1BA74" },
        { path: "/music", name: "音乐", bgColor: "#E6CEAC" },
        { path: "/book", name: "书籍", bgColor: "#ECAD9E" },
        { path: "/chat", name: "聊天", bgColor: "#F4606C" },
      ],
    };
  },
  methods: {
    ...mapMutations(["setCurMenu"]),
    switchMenu(menu) {
      this.setCurMenu(menu);
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  font-size: 0.4rem;
  height: 1rem;
  width: 100%;
  background: #d1ba74;
  text-align: center;
  line-height: 1rem;
  
}

</style>