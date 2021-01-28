<template>
  <div id="tv" :style="{backgroundColor:'#' + tvObj.body_bg_color}">
    <div class="first-box">
      <div class="imgs">
        <img
          :src="'https://images.weserv.nl/?url=' + tvObj.cover.image.small.url"
          alt=""
        />
      </div>
      <div class="content">
        <h2>{{ tvObj.title }}</h2>
        <p>{{ tvObj.card_subtitle }}</p>
      </div>
    </div>

    <p>{{ tvObj.intro }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tvObj: {},
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let baseUrl = "https://bird.ioliu.cn/v2?url=";
      let tvUrl =
        "https://m.douban.com/rexxar/api/v2/tv/" +
        this.$route.params.id +
        "?ck=&for_mobile=1";
      this.axios
        .get(baseUrl + tvUrl)
        .then((res) => {
          console.log(res);
          this.tvObj = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
.first-box {
  display: flex;
  justify-content: space-around;
  .imgs{
      flex: 2;
      img{
          width: 100%;
          padding: 10px;
      }
  }
  .content{
      flex: 5;
      margin: 10px;
      margin-left: 30px;
  }
}
</style>