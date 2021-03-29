<template lang="">
    <div class="QnA">
        <div id="title">
            1 대 1 문의
        </div>
        <div id="ask">
            <input class="ask-button" type="button" value=" 1대1 문의하기 ">
        </div>
        <div id="table">
            <div v-for="(item, id) in boardList" :key="id">
                <router-link class=table-router :to="`/notice/${item.id}`">
                    <span class="table-id">{{item.id}}</span>
                    <span class="table-title">{{item.title}}</span>
                    <span class="table-date">{{item.date}}</span>
                </router-link>
            </div>
        </div>
        <div style="display:flex">
            <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
                style="margin: 0 auto;"
            ></b-pagination>
        </div>
    </div>
</template>
<script>
export default {
    name: 'QnA',
        data(){
        // 추후에는 axios이용해서 클릭했을 경우 각각의 데이터를 불러오도록 만들 예정
        return {
            boardList:[
                {
                    id: 1,
                    title: "타이틀1",
                    contents: "컨텐츠!@!@",
                    date: "2021.03.07",
                },
                {
                    id: 2,
                    title: "타이틀2",
                    contents: "컨텐츠!@!@",
                    date: "2021.03.08",
                },
                {
                    id: 3,
                    title: "타이틀3",
                    contents: "컨텐츠!@!@",
                    date: "2021.03.09",
                },
                {
                    id: 4,
                    title: "타이틀4",
                    contents: "컨텐츠!@!@",
                    date: "2021.03.10",
                },
            ]
        }
    }
}
</script>
<style scoped>
    .QnA{
        /*background-color: #A26D6D;*/
        align-items:center;
        width: 100%;
        height: 1000px;
    }
    #title{
        display: table;
        background-color: #A26D6D;
        width: 1040px;
        text-align: left;
        font-size:50px;
        padding:20px;
        margin: 0 auto;
    }
    #ask{
        width: 1040px;
        height: 50px;
        margin:0 auto;
    }
    .ask-button{
        margin: 2px auto;
        padding: 2px;
        float:right;
    }
    #table{
        display: table;
        width: 1040px;
        border-top: 1px solid black;
        table-layout: fixed;
        margin: 0 auto;
    }
    .table-router{
        display: table-row;
        height: 60px;
    }
    .table-id, .table-title, .table-date{
        vertical-align: middle;
        display: table-cell;
        padding-right: 30px;
        padding-left: 30px;
        box-sizing: border-box;
    }
    a{
    color: black;
    text-decoration: none;
    font-size: 120%;
    }
</style>