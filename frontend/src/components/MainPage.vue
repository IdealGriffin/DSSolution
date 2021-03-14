<template>
  <div class="MainPage">
    <!-- <h1>{{ "Welcome to Your DS Solutions!" }}</h1> -->
    <!-- <p>
      {{"여기는 메인 페이지에요!"}}
    </p> -->
    <img id="main-banner" src="../assets/mainbanner.png" alt="main-banner">
    <!-- 반복문으로 처리 -->
    <h2>{{"News"}}</h2>
    <div id="news-list">
      <div id="news">
        <img id="news-img" src="../assets/apache.png" alt="news-img">
        <div id="news-data">
          <h2 id="news-title">
            뉴스 타이틀
          </h2>
          <p id="news-contents">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vitae delectus deserunt</p>
        </div>
      </div>
      <div id="news">
        <img id="news-img" src="../assets/apache.png" alt="news-img">
        <div id="news-data">
          <h2 id="news-title">
            뉴스 타이틀
          </h2>
          <p id="news-contents">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vitae delectus deserunt</p>
        </div>
      </div>
      <div id="news">
        <img id="news-img" src="../assets/apache.png" alt="news-img">
        <div id="news-data">
          <h2 id="news-title">
            뉴스 타이틀
          </h2>
          <p id="news-contents">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vitae delectus deserunt</p>
        </div>
      </div>
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
#news-img{
  width: 100%;
  height: 100%;
}
#news-list{
  display: flex;
  width: 100%;
  height: 140px;
}
#news{
  display: flex;
  padding-left: 5%;
  padding-right: 5%;
}
#news-title{
  max-height: 50%;
}
#news-data{
  padding-left: 5%;
  padding-right: 5%
}
#news-contents{
  width: 100%;
  height: 50%;
  padding-left: 5%;
  padding-right: 5%;
  text-align: left;
  overflow: hidden;
}
#cooporate{
  padding-top: 5%;
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