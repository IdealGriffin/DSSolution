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
    <b-card-group style="padding:30px">

      <b-card
        :title="this.latestNews.title"
        :img-src="this.latestNews.image_url"
        img-alt="Image"
        img-top
        tag="article"
        style="min-width: 340px;"
        class="mb-2"
        id="left-news"
      >
        <b-card-text>
          {{this.latestNews.contents}}
        </b-card-text>

        <b-button href="#/support/news" variant="primary">
            더보기
        </b-button>
      </b-card>

      <b-card
        :title="this.latestNotice.title"
        :img-src="this.latestNotice.image_url"
        img-alt="Image"
        img-top
        tag="article"
        style="min-width: 340px;"
        class="mb-2"
        id="right-notice"
      >
        <b-card-text>
          {{this.latestNotice.contents}}
        </b-card-text>

        <b-button href="#/notice" variant="primary">더보기</b-button>
      </b-card>
    </b-card-group>
    <swiper class="swiper" :options="swiper1">
      <swiper-slide>
        <router-link to="/product/1">
          <img class="products-img" src="../assets/products1.jpg" alt="product-img"/>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/product/2">
          <img class="products-img" src="../assets/products2.jpg" alt="product-img"/>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/product/3">
          <img class="products-img" src="../assets/products3.jpg" alt="product-img"/>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/product/4">
          <img class="products-img" src="../assets/products4.jpg" alt="product-img"/>
        </router-link>
      </swiper-slide>

      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-pagination2" slot="pagination"></div> 
    </swiper>

    <div id="cooporate">
      <h2>Cooporate</h2><br>

      <swiper class="swiper" :options="swiper2">
        <swiper-slide v-for="(i, id) in cooporate" :key="id">
          <img id="cooporate-img" :src="i.image_url" :alt="i.name">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div> 
      </swiper>
    </div>
    
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper' 
import 'swiper/css/swiper.css'

export default {
  
  name: 'MainPage',
  components:{
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      host_name : "http://localhost:8000",
      swiper1: {
        loop: false, 
        pagination: {
          el: '.swiper-pagination1', 
          clickable: false 
        },
        navigation: { 
          nextEl: '.swiper-button-next', 
          prevEl: '.swiper-button-prev' 
        },
        breakpoints: { 
          // 화면의 넓이가 320px 이상일 때 
          320: { slidesPerView: 1.5, spaceBetween: 20 }, 
          // 화면의 넓이가 640px 이상일 때 
          640: { slidesPerView: 2.5, spaceBetween: 30 } 
        },
      },

      swiper2: {
        loop: false, 
        pagination: {
          el: '.swiper-pagination', 
          clickable: true 
        }, 
        breakpoints: { 
          // 화면의 넓이가 320px 이상일 때 
          320: { slidesPerView: 2.5, spaceBetween: 20 }, 
          // 화면의 넓이가 640px 이상일 때 
          640: { slidesPerView: 5, spaceBetween: 30 } 
        },
      },


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
        link_url : ""
      },
      latestNotice : {
        title : "최근 공지 제목 기본 값",
        contents : "최근 공지 컨텐츠 기본 값",
        image_url :"https://www.flaticon.com/svg/vstatic/svg/3892/3892387.svg?token=exp=1617807030~hmac=7130147e145469bcca4319fb37920ab9",
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
      .get(this.host_name+'/banner')
      .then(response => {
          // console.log(response)
          this.banner = response.data
      });
    },
    getLatestNews(){
      this.axios
      .get(this.host_name+'/news/last')
      .then(response => {
        this.latestNews = response.data[0]
      })
    },
    getLatestNotice(){
      this.axios
      .get(this.host_name+'/notice/last')
      .then(response => {
        this.latestNotice = response.data[0]
      })
    },
    getCooporate(){
      this.axios
      .get(this.host_name+'/cooporate')
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
}

.products-img{
  width: 100%;
  padding: 15px;
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
  width: 100%;
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