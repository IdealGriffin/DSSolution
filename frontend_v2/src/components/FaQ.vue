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
        <b-tabs id="choose-list" justified>
            <b-tab title="TOP10" active @click="reKind('/TOP10')"></b-tab>
            <b-tab title="전체" @click="reKind('')"></b-tab>
            <b-tab title="고객지원" @click="reKind('/고객지원')"></b-tab>
            <b-tab title="고장" @click="reKind('/고장')"></b-tab>
            <b-tab title="교환 및 환불" @click="reKind('/교환 및 환불')"></b-tab>
            <b-tab title="기타" @click="reKind('/기타')"></b-tab>
            <b-tab title="검색" @click="reKind('')">
                <input v-on:input="getSearch" class="search-text" placeholder="Search">
            </b-tab>
        </b-tabs>
        <div id="table" role="tablist">
            <div v-for="(item, id) in boardList.results" :key="id" >
                <b-card>
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

            <b-pagination
                :total-rows="boardList.count"
                :perPage=15
                @page-click="reTable"
                align="center"
            ></b-pagination>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FaQ',
    data(){
        // 추후에는 axios이용해서 클릭했을 경우 각각의 데이터를 불러오도록 만들 예정
        return {
            table_kind: "/TOP10",
            currentPage: 1,
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
            ],
        }
    },
    mounted(){
        this.init();
    },
    methods: {
        init(){
            this.getNotice();
        },
        reKind : function(kind){
            this.currentPage=1;
            this.table_kind=kind;
            this.getNotice();
        },
        reTable : function(b,p){
            this.currentPage=p;
            this.getNotice();
        },
        getSearch: function(event){
            this.axios
            .get('http://localhost:8000/faq/?search='+event.target.value+'&&page='+this.currentPage)
            .then(response => {
                console.log(response)
                this.boardList = response.data
            });
        },
        getNotice(){
            this.axios
            .get('http://localhost:8000/faq'+this.table_kind+'/?page='+this.currentPage)
            .then(response => {
                console.log(response)
                this.boardList = response.data
            });
        },

    },
}
</script>
<style scoped>
    .FaQ{
        font-weight: 700;
        max-width: 1080px;
        margin: 0 auto;
        text-align: center;
        padding-bottom: 20px;
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
    }.search-text{
        float:right;
        margin: 10px;
    }
</style>