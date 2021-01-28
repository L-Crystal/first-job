<template>
  <div
    id="book"
    v-loading.fullscreen="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.5)"
    :data="tableData"
    style="width: 100%"
  >
    <div id="carousel">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in carouselList" :key="item">
          <img :src="item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="tabs">
      <el-tabs :stretch="true" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="虚构类" name="fiction">
          <ul>
            <li v-for="item in bookList" :key="item.id">
              <div class="img">
                <img :src="item.cover.url" alt="" />
              </div>
              <div class="content">
                <h3>{{ item.title }}</h3>
                <p>{{ item.info }}}</p>
                <div class="rate">
                  <el-rate
                    :value="getRate(item.rating.value)"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}"
                  >
                  </el-rate>
                </div>
              </div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="非虚构类" name="nonfiction">
          <div class="book-list">
            <el-row v-for="item in nonbookList" :key="item.id">
              <el-col :span="8">
                <div class="grid-content">
                  <img :src="item.cover.url" alt="" />
                </div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.info }}}</p>
                  <div class="rate">
                    <el-rate
                      :value="getRate(item.rating.value)"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template="{value}"
                    >
                    </el-rate>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselList: [],
      noncarouselList: [],
      bookList: [],
      nonbookList: [],
      activeName: "fiction",
      loading: false,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let baseUrl = "https://bird.ioliu.cn/v2?url=";
      let bookUrl = `https://m.douban.com/rexxar/api/v2/subject_collection/book_${this.activeName}/items?os=ios&start=0&count=8&loc_id=0&_=0`;
      this.loading = true;
      this.axios
        .get(baseUrl + bookUrl)
        .then((res) => {
          console.log(res);
          this.carouselList = res.data.subject_collection_items.map((item) => {
            return item.cover.url;
          });
          this.bookList = res.data.subject_collection_items;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
      this.loading = true;
      this.axios
        .get(baseUrl + bookUrl)
        .then((res) => {
          console.log(res);
          this.noncarouselList = res.data.subject_collection_items.map(
            (item) => {
              return item.cover.url;
            }
          );
          this.nonbookList = res.data.subject_collection_items;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleClick(tab, event) {
      console.log(tab, event);
      this.getData();
    },
    getRate(value) {
      let val = value / 2;
      val = val * 10;
      val = Math.trunc(val);
      val = val / 10;
      return val;
    },
  },
};
</script>

<style lang="scss" scoped>
#carousel {
  img {
    width: 100%;
  }
}
.tabs {
  padding: 0.2rem;
  li {
    display: flex;
    padding: 0.2rem;
    .img {
      flex: 8;
      img {
        width: 100%;
      }
    }
    .content {
      flex: 16;
      padding: 0.2rem;
      h3 {
        font-weight: bolder;
        margin-bottom: 0.25rem;
      }
    }
  }
  .book-list {
    .grid-content {
      padding: 0.2rem;
      img {
        width: 100%;
      }
      h3 {
        font-weight: bolder;
        margin-bottom: 0.25rem;
      }
    }
  }
}
</style>