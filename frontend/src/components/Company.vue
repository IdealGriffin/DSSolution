<template lang="">
    <div class="Company">
        <div id="introduce">
            <img id="rogo" src="../assets/대충만든로고.png" alt="main-banner">
            <h1> DS Solution </h1>
            <br>
            <div id="detail">
                DS solution은 2014년 설립되었으며 여러 기업에 지원을 하면서 안정적인 사업을 제공하고 있습니다. <br>
                회사소개 디테일. <br>
                <br>
            </div>
        </div>
        <br><div style="width:100%; height:4px; background-color:black;"/><br>
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
        
        <br><div style="width:100%; height:4px; background-color:black;"/><br>

        <div id="industry">
            <h1>주요사업 소개</h1>
            <div id="industry-list">
                <img id="industry-img" src="../assets/apache.png" alt="news-img">
                <img id="industry-img" src="../assets/apache.png" alt="news-img">
                <img id="industry-img" src="../assets/apache.png" alt="news-img">
                <img id="industry-img" src="../assets/apache.png" alt="news-img">
            </div>
        </div>

        <br><div style="width:100%; height:4px; background-color:black;"/><br>

        <div id="certificate">
            <h1>DSSolution Certificate</h1>
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
    background-color: #A26D6D;
    width: 100%;
}
#rogo{
    width: 600px;
}
.history{
    width:100%;
}
#photo{
    float:left;
    margin-left: 8px;
    width: 45%;
}
#explain{
    float: left;
    margin-left: 8px;
    width: 45%;
    vertical-align: top;
    text-align: left;
}
#history_photo{
    width: 400px;
    height: 600px;
}
#certificate-list{
  display: flex;
  justify-content: space-between;
  max-height: inherit;
  max-width: 100%;
  padding-left: 5%;
  padding-right: 5%;
}
#certificate-img{
  padding-left: 1%;
  padding-right: 1%;
  max-width: 10%;
  height: auto;
}
#industry-list{
  display: flex;
  justify-content: space-between;
  max-height: inherit;
  max-width: 100%;
  padding-left: 5%;
  padding-right: 5%;
}
#industry-img{
  padding-left: 1%;
  padding-right: 1%;
  max-width: 10%;
  height: auto;
}
</style>
