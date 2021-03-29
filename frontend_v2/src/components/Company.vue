<template lang="">
    <div class="Company">
        <div id="introduce">
            <img id="rogo" src="../assets/대충만든로고.png" alt="main-banner">

            <div id="detail" style="background-color:white">
                <h1> DS Solution </h1><br>
                DS solution은 2014년 설립되었으며 여러 기업에 지원을 하면서 안정적인 사업을 제공하고 있습니다. <br>
                회사소개 디테일. <br>
                <br>
            </div>
            <br>
        </div>
        <div style="width:100%; height:4px; background-color:black;"/><br>
        <table class="history">
            <th id="photo">
                <img id="history_photo" src="../assets/연혁.png">
            </th>
            <th id="explain">
                <h1> HISTORY </h1>
                <br>
                2014 : 회사설립 <br>
                <br>
                2014 : 회사설립 <br>
                <br>
                2014 : 회사설립 <br>
                <br>
                2014 : 회사설립 <br>
                <br>
                
            </th>
        </table>
        
        <br><div style="width:100%; height:4px; background-color:black;"/>

        <div id="industry" style="background-color:white">
            <br>
            <h1>주요사업 소개</h1>
            <div id="industry-list">
                <img id="industry-img" src="../assets/apache.png" alt="news-img">
                <img id="industry-img" src="../assets/apache.png" alt="news-img">
                <img id="industry-img" src="../assets/apache.png" alt="news-img">
                <img id="industry-img" src="../assets/apache.png" alt="news-img">
            </div>
            <br>
        </div>

        <div style="width:100%; height:4px; background-color:black;"/><br>

        <div id="certificate">
            <h1>DSSolution 특허</h1>
            <div id="certificate-list">
                <img id="certificate-img" src="../assets/apache.png" alt="news-img">
                <img id="certificate-img" src="../assets/apache.png" alt="news-img">
                <img id="certificate-img" src="../assets/apache.png" alt="news-img">
                <img id="certificate-img" src="../assets/apache.png" alt="news-img">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Company',
}
</script>

<style scoped>
.Company{
    text-align: center;
    /*background-color: #A26D6D;*/
    width: 100%;
}
#detail{
    text-align:center;
}
#rogo{
    display: inline-block;
    width: 600px;
}
.history{
    display: inline-block;
    width:1040px;
}
#introduce{
    display: table;
    width:1040px;
    text-align: center;
    background-image: url(../assets/로봇팔.png);
    background-size:100%;
    margin: 0 auto;
    padding: 20px;
}
#photo{
    float:left;
    margin-left: 8px;
    width: 45%;
}
#explain{
    float: left;
    text-align:center;
    margin-left: 8px;
    width: 45%;
    vertical-align: top;
    text-align: left;
}
#history_photo{
    width: 400px;
    height: 600px;
}
#certificate{
    margin: 20px;
}
#certificate-list{
  display: inline-block;
  justify-content: space-between;
  max-width: 1040px;
}
#certificate-img{
  padding-left: 4px;
  padding-right: 4px;
  max-width: 200px;
  height: 300px;
}
#industry-list{
  display: table;
  justify-content: space-between;
  max-height: inherit;
  max-width: 1040px;
  padding-bottom:20px;
  margin: 0 auto;
}
#industry-img{
  border-radius: 50%;
  max-width: 200px;
  height: auto;
  padding: 4px;
}

@media ( max-width: 1040px ) {
    #introduce{
        width:100%;
    }
}
</style>
