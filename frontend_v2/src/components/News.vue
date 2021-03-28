<template lang="">
    <div class="News">
        <div class="headline">
            <h2 class="headline-title">뉴스</h2>
        </div>
        <div>
            <div class="board-list">
                <div v-for="(item, id) in newsList" :key="id">
                    <router-link id=board-router :to="`/support/news/${item.id}`">
                        <span class="board-id">{{item.id}}</span>
                        <span class="board-title">{{item.title}}</span>
                        <span class="board-date">{{item.date}}</span>
                    </router-link>
                </div>
            </div>
            <nav class="pagination">

            </nav>
        </div>
    </div>
</template>
<script>
export default {
    name: 'News',
    components: {

    },
    data(){
        // 추후에는 axios이용해서 클릭했을 경우 각각의 데이터를 불러오도록 만들 예정
        return {
            newsList:[
                {
                    id: 1,
                    title: "뉴스타이틀1",
                    contents: "컨텐츠!@!@",
                    date: "2021.03.07",
                },
                {
                    id: 2,
                    title: "뉴스타이틀2",
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
.headline-title{
    font-weight: 700;
    max-width: 1080px;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 20px;
}

.board-list{
    display: table;
    width: 1080px;
    border-top: 1px solid black;
    table-layout: fixed;
    margin: 0 auto;
}

#board-router{
    display: table-row;
    height: 60px;
}

.board-id, .board-data{
    text-align: middle;
    display: table-cell;
}

.board-id, .board-title, .board-date{
    vertical-align: middle;
    display: table-cell;
    padding-right: 30px;
    padding-left: 30px;
    box-sizing: border-box;
}
.board-id{
    width: 97px;
}

.board-title{
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
    overflow: hidden;
    width: 100%;
}

.board-date{
    width: 125px;
}

a{
    color: black;
    text-decoration: none;
    font-size: 120%;
}
</style>