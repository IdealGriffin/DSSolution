<template lang="">
    <div class="Support">
        <a id="title">
            회사찾아오시는 길
        </a>
        <div id="location">
            <img class="img" src="../assets/회사위치.png">
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'Support',
    
}
</script>
<style scoped>
    .Support{
        width: 100%;
        display:table;
    }
    .title{
        padding: 5px;
        font-size: 60px;
        margin:0 auto;
    }
    #location{
        margin:0 auto;
        width:1040px;
    }
    #location .img{
        width:800px;
        height:auto;
        margin:0 auto;
    }
</style>