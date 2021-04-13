<template>
  <div class="MainPage">
    <!-- <h1>{{ "Welcome to Your DS Solutions!" }}</h1> -->
    <!-- 배너 자리 -->
    <!-- <img id="main-banner" src="../assets/mainbanner.png" alt="main-banner"> -->
    <b-carousel
      id="main-banner"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="100"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide v-for="(b, id) in banner" :key="id" :img-src="b.location">
      </b-carousel-slide>

      <!-- <b-carousel-slide v-for="(b, id) in banner" :key="id">
        <template #img>
          <img
            class="d-block img-fluid"
            width="1024"
            height="480"
            :src="b.location"
            alt="image slot"
          >
        </template>
      </b-carousel-slide> -->

    </b-carousel>

    <!-- 반복문으로 처리 -->
    <div id="middle">
      <div id="left-news">
        <h2 class="title">{{"News"}}</h2>
        <div id="middle-data">
          <img id="news-img" :src="this.latestNews.image_url" alt="news-img">
          <div id="news-data">
            <h2 class="title">
              {{this.latestNews.title}}
            </h2>
            <p id="news-contents">{{this.latestNews.contents}}</p>
          </div>
        </div>
      </div>
      <div id="right-notice">
        <h2 class="title">{{"공지사항"}}</h2>
        <div id="middle-data">
          <img id="notice-img" src="https://www.flaticon.com/svg/vstatic/svg/3892/3892387.svg?token=exp=1617807030~hmac=7130147e145469bcca4319fb37920ab9" alt="notice-img">
          <div id="notice-data">
            <h2 class="title">
              {{this.latestNotice.title}}
            </h2>
            <p id="notice-contents">{{this.latestNotice.contents}}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="main-business">
      <router-link to="/product1">
        <img class="products-img" src="../assets/products1.jpg" alt="product-img"/>
      </router-link>
      <router-link to="/product2">
        <img class="products-img" src="../assets/products2.jpg" alt="product-img"/>
      </router-link>
      <router-link to="/product3">
        <img class="products-img" src="../assets/products3.jpg" alt="product-img"/>
      </router-link>
      <router-link to="/product4">
        <img class="products-img" src="../assets/products4.jpg" alt="product-img"/>
      </router-link>
    </div>
    <div id="cooporate">
      <h2>Cooporate</h2>
      <div id="cooporate-list">
        <img v-for="(i, id) in cooporate" :key="id" id="cooporate-img" :src="i.image_url" :alt="i.name">
      </div>

    </div>
    
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      banner : [
        {
          name : "기본 배너",
          location : "https://picsum.photos/1024/480/?image=52",
        },
        {
          name : "기본 배너2",
          location : "https://picsum.photos/1024/480/?image=52",
        },
        {
          name : "기본 배너3",
          location : "https://picsum.photos/1024/480/?image=52",
        },
        {
          name : "기본 배너4",
          location : "https://picsum.photos/1024/480/?image=52",
        },
      ],
      latestNews : {
        title : "최근 뉴스 제목 기본 값",
        contents : "최근 뉴스 컨텐츠 기본 값",
        image_url : "https://www.flaticon.com/svg/vstatic/svg/3892/3892387.svg?token=exp=1617807030~hmac=7130147e145469bcca4319fb37920ab9",
      },
      latestNotice : {
        title : "최근 공지 제목 기본 값",
        contents : "최근 공지 컨텐츠 기본 값"
      },
      cooporate : [
        {
          name : "기본 이미지",
          image_url : "https://www.flaticon.com/svg/vstatic/svg/1786/1786971.svg?token=exp=1617804450~hmac=ffc3c263fae13afe7bf02256e0f2655a",
        },
        {
          name : "기본 이미지2",
          image_url : "https://www.flaticon.com/svg/vstatic/svg/1786/1786971.svg?token=exp=1617804450~hmac=ffc3c263fae13afe7bf02256e0f2655a",
        },
        {
          name : "기본 이미지3",
          image_url : "https://www.flaticon.com/svg/vstatic/svg/1786/1786971.svg?token=exp=1617804450~hmac=ffc3c263fae13afe7bf02256e0f2655a",
        },
        {
          name : "기본 이미지4",
          image_url : "https://www.flaticon.com/svg/vstatic/svg/1786/1786971.svg?token=exp=1617804450~hmac=ffc3c263fae13afe7bf02256e0f2655a",
        },
        {
          name : "기본 이미지5",
          image_url : "https://www.flaticon.com/svg/vstatic/svg/1786/1786971.svg?token=exp=1617804450~hmac=ffc3c263fae13afe7bf02256e0f2655a",
        },
      ],
      slide: 0,
      sliding: null
    };
  },
  props: {
    // msg: String
  },
  mounted(){
    this.init()
  },
  methods: {
    init(){
      this.getBanner();
      this.getLatestNews();
      this.getLatestNotice();
      this.getCooporate();
    },
    getBanner(){
      this.axios
      .get('http://10.211.55.7:8000/mainpage/banner/info')
      .then(response => {
          // console.log(response)
          this.banner = response.data
      });
    },
    getLatestNews(){
      this.axios
      .get('http://10.211.55.7:8000/mainpage/news/latest')
      .then(response => {
        this.latestNews = response.data
      })
    },
    getLatestNotice(){
      this.axios
      .get('http://10.211.55.7:8000/mainpage/notice/latest')
      .then(response => {
        this.latestNotice = response.data
      })
    },
    getCooporate(){
      this.axios
      .get('http://10.211.55.7:8000/mainpage/cooporate')
      .then(response => {
        console.log(response)
        this.cooporate = response.data
      })
    },
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  },
}
</script>

<style scoped>
/* #main-banner{
width: 100%;
height: 400px;
} */

#news-img, #notice-img{
  width: 25%;
  height: 25%;
}

#middle{
  display: flex;
  padding-bottom: 2%;
}
#middle-data{
  display: flex;
}
#middle-list{
  display: flex;
  width: 100%;
  height: 140px;
}
#left-news, #right-notice{
  padding-left: 3%;
  padding-right: 3%;
}
#news-data, #notice-data{
  padding-left: 5%;
  padding-right: 5%;
}
.title{
  text-align: left;
}
#news-contents, #notice-contents{
  width: 100%;
  height: 50%;
  padding-right: 5%;
  text-align: left;
  overflow: hidden;
}

#main-business{
  display: flex;
  justify-content: space-between;
}

.products-img{
  height: 600px;
  width: 400px;
  padding: 20px;
}

#cooporate{
  padding-top: 5%;
  padding-bottom: 5%;
  height: 20%;
}
#cooporate-list{
  display: flex;
  justify-content: space-between;
  max-height: inherit;
  max-width: 100%;
  padding-left: 5%;
  padding-right: 5%;
}
#cooporate-img{
  padding-left: 1%;
  padding-right: 1%;
  max-width: 10%;
  height: auto;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.MainPage{
  background-color: whitesmoke;
}
</style>