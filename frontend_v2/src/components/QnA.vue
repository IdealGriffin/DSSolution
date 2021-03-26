<template lang="">
    <div class="QnA">
        <a id="title">
            1 대 1 문의
        </a>
        <br>
        <form id="table">
            <input id="table-answer" type="button" value=" 1대1 문의하기 ">
        </form>
        <br>

        <div id="table">
            <ui id="table-head">
                <div id="table-kind"><b>문의종류</b></div>
                <div id="table-question" style="text-align:center"><b>문의제목</b></div>
                <a id="table-like"><b>조회수</b></a>
                <a id="table-like"><b>좋아요</b></a>
                <a id="table-like"><b>답변</b></a>
            </ui>
        </div>
        <div id="table">
            <ui id="table-head">
                <div id="table-kind">교환 및 환불</div>
                <a sytle="font-color:black" href="./qna/answer"><div id="table-question">제가 입금을 햇는데 제품이 마음에 안들어서요.</div></a>
                <a id="table-like">3</a>
                <a id="table-like">2</a>
                <a id="table-like">2</a>
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
    name: 'QnA',
    
}
</script>
<style scoped>
    .QnA{
        background-color: #A26D6D;
        align-items:center;
        width: 100%;
        height: 1000px;
    }
    #title{
        font-size: 70px;
    }
    #table{
        display:inline-block;
        width:1200px;
        height: 30px;
        border-top:2px solid;
        padding: 15px 15px 15px 15px;
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
        float:right;
        font-size:20px;
    }#table-like{
        float:right;
        width:60px;
        font-size:20px;
    }
</style>