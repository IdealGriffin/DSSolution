<template>
  <div class="MainPage">
    <!-- <h1>{{ "Welcome to Your DS Solutions!" }}</h1> -->
    <!-- <p>
      {{"여기는 메인 페이지에요!"}}
    </p> -->
    <img id="main-banner" src="../assets/mainbanner.png" alt="main-banner">
    <!-- 반복문으로 처리 -->
    <div id="middle">
      <div id="left-news">
        <h2 class="title">{{"News"}}</h2>
        <div id="middle-data">
          <img id="news-img" src="../assets/apache.png" alt="news-img">
          <div id="news-data">
            <h2 class="title">
              뉴스 타이틀
            </h2>
            <p id="news-contents">News Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vitae delectus deserunt</p>
          </div>
        </div>
      </div>
      <div id="right-notice">
        <h2 class="title">{{"공지사항"}}</h2>
        <div id="middle-data">
          <img id="notice-img" src="../assets/apache.png" alt="notice-img">
          <div id="notice-data">
            <h2 class="title">
              공지사항 타이틀
            </h2>
            <p id="notice-contents">Notice Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vitae delectus deserunt</p>
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
        <img id="cooporate-img" src="../assets/apache.png" alt="news-img">
        <img id="cooporate-img" src="../assets/apache.png" alt="news-img">
        <img id="cooporate-img" src="../assets/apache.png" alt="news-img">
        <img id="cooporate-img" src="../assets/apache.png" alt="news-img">
        <img id="cooporate-img" src="../assets/apache.png" alt="news-img">
      </div>

    </div>
    
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    // msg: String
  }
}
</script>

<style scoped>
#main-banner{
  width: 100%;
  height: 150%;
}

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