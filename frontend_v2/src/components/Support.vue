<template lang="">
    <div class="Support">
        <div id="title">
            찾아오는 길
        </div>
        <div id="location">
            <img class="img" src="../assets/회사위치.png">
            <div class="location-list">
                <div v-for="(item, id) in locationList" :key="id">
                    <div class="list">
                        <div class="list-id"><b>{{item.id}} : </b></div>
                        <div class="list-title">{{item.title}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Support',
    data(){
        return {
            locationList:[
                {
                    id: "주소",
                    title: "수원시~~",
                },
                {
                    id: "대표전화",
                    title: "031-123-2123",
                },
                {
                    id: "팩스",
                    title: "031-1234-1234",
                },
            ]
        }
    }
}
</script>
<style scoped>
    .Support{
        width: 100%;
        display:table;
    }
    #title{
        display: table;
        /*background-color: #A26D6D;*/
        width: 1040px;
        text-align: left;
        font-size:50px;
        padding:20px;
        margin: 0 auto;
    }
    #location{
        display:table;
        margin:0 auto;
        width:1040px;
    }
    #location .img{
        width:1000px;
        height:auto;
        margin:0 auto;
        padding:20px;
    }
    .list{
        display: flex;
    }
    .list-id{
        width:100px;
    }
    .list-id, .list-title{
        font-size:20px;
    }
</style>