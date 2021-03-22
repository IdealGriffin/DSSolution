<template lang="">
    <div class="FaQ">
        <div style="width:100%;height:40px;"/>
        <a id="title">
            자주 묻는 질문
        </a>
        <div id="Go_QnA">
            자주 묻는 질문을 정리한 페이지 입니다.<br>
            검색을 해도 원하는 질문이 없다면 아래 링크를 통해 1대1 문의가 가능합니다.<br>
            1 대 1 문의하러 가기 <a href="./QnA"> -> </a>
        </div>
        <ui id="choose-list">
            <ui id="choose-item" name="1" style="text-decoration:underline;">TOP10</ui>
            <ui id="choose-item" name="2">전체</ui>
            <ui id="choose-item" name="3">고객지원</ui>
            <ui id="choose-item" name="4">고장</ui>
            <ui id="choose-item" name="5">교환 및 환불</ui>
            <ui id="choose-item" name="6">기타</ui>
        </ui>
        <br>
        <form id="table">
            <input id="table-answer" type="button" value=" 검색 ">
            <input id="table-answer" type="text" placeholder="Search"> 
        </form>
        <br>
        <div id="table">
            <ui id="table-head">
                <div id="table-kind">교환 및 환불</div>
                <div id="table-question">환불은 언제까지 되나요?</div>
                <a id="table-answer">+</a>
            </ui>
        </div>
        <div id="table">
            <ui id="table-head">
                <a id="table-kind"> 고객지원</a>
                <a id="table-question"> 전화문의는 어떻게하나요?</a>
                <a id="table-answer"> + </a>
            </ui>
        </div>
        <div id="table">
            <ui id="table-head">
                <a id="table-kind"> 교환 및 환불</a>
                <a id="table-question"> 환불은 언제까지 되나요?</a>
                <a id="table-answer"> + </a>
            </ui>
        </div>

        <div id="table">
            <ui id="choose-item" name="1" style="text-decoration:underline;">1</ui>
            <ui id="choose-item" name="2">2</ui>
            <ui id="choose-item" name="3">3</ui>
            <ui id="choose-item" name="4">4</ui>
            <ui id="choose-item" name="5">5</ui>
            <ui id="choose-item" name="6">6</ui>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FaQ',
    
}
</script>
<style scoped>
    .FaQ{
        background-color: #A26D6D;
        align-items:center;
        width: 100%;
        height: 1000px;
    }
    #title{
        font-size: 70px;
    }
    #Go_QnA{
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 20px;
        background-color: white;
    }
    #choose-list{
        width:100%;
    }
    #choose-item{
        max-width:100%;
        padding-left:5%;
        padding-right:5%;
        font-size:20px;
    }
    #table{
        display:inline-block;
        border-top:2px solid;
        height: 30px;
        width: 1200px;
        padding: 15px 15px;
    }
    #table-kind{
        width:120px;
        font-size:20px;
        float:left;
    }#table-question{
        width:500px;
        font-size:20px;
        float:left;
        text-align:left;
    }#table-answer{
        width:50px;
        float:right;
        font-size:20px;
    }
</style>