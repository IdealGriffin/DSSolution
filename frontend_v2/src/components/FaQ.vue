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
        <b-tabs id="choose-list" v-model="table_kind" justified>
            <b-tab title="TOP10" active></b-tab>
            <b-tab title="전체"></b-tab>
            <b-tab title="고객지원"></b-tab>
            <b-tab title="고장"></b-tab>
            <b-tab title="교환 및 환불"></b-tab>
            <b-tab title="기타"></b-tab>
        </b-tabs>
        <form id="search">
            <input type="text" class="search-text">
        </form>
        <div id="table" role="tablist">
            <div v-for="(item, id) in boardList" :key="id" >
                <b-card v-if="item.check_kind & kindlist[table_kind]">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block v-b-toggle="'accordion-'+item.id" variant="info">
                            <div class="table-list">
                                <span class="table-kind">{{item.kind}}</span>
                                <span class="table-title">{{item.title}}</span>
                            </div>
                        </b-button>
                    </b-card-header>
                    <b-collapse v-bind:id="'accordion-'+item.id" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>{{item.contents}}</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FaQ',
    data(){
        // 추후에는 axios이용해서 클릭했을 경우 각각의 데이터를 불러오도록 만들 예정
        return {
            table_kind: 0,
            kindlist:[
                1,2,4,8,16,32,
            ],
            boardList:[
                {
                    id: 1,
                    kind: "교환 및 환불",
                    check_kind: 19,
                    title: "어떻게 교환환불을 할 수 있나요?",
                    contents: "~~으로 전화 안내후 ~~주소로 택배보내주시면 교환환불 친절하게 도와드리겠습니다.",
                },
                {
                    id: 2,
                    kind: "고장",
                    check_kind: 11,
                    title: "긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트",
                    contents: "컨텐츠!@!@",
                },
                {
                    id: 3,
                    kind: "교환 및 환불",
                    check_kind: 19,
                    title: "타이틀3",
                    contents: "컨텐츠!@!@",
                },
                {
                    id: 4,
                    kind: "교환 및 환불",
                    check_kind: 19,
                    title: "타이틀4",
                    contents: "컨텐츠!@!@",
                },
            ]
        }
    },
}
</script>
<style scoped>
    .FaQ{
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
    #Go_QnA{
        margin:20px auto;
        font-size: 20px;
        width:1040px;
        background-color: white;
    }
    #choose-list{
        width:1040px;
        margin:20px auto;
    }
    #choose-item{
        max-width:100%;
        padding-left:5%;
        padding-right:5%;
        font-size:20px;
    }
    #table{
        display:table;
        width: 1040px;
        margin: 0 auto;

        height: 30px;
        padding: 15px 15px;
    }
    #table-list{
        display:flex;
    }
    .table-kind{
        width:120px;
        float: left;
        font-size: 17px;
        padding: 10px;
        margin: auto;
    }.table-title{
        width:750px;
        font-size:20px;
        float:left;
        padding: 7px 10px;
        text-align:left;
    }.table-answer{
        width:50px;
        float:right;
        font-size:20px;
    }#search{
        width:1040px;
        height:50px;
        margin:0 auto;
    }.search-text{
        float:right;
    }
</style>