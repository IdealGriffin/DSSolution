<template lang="">
    <div class="menu">
        <img id="logo" alt="logo" src="../assets/cocacolaLogo.jpeg">
        <ul class="menu-list">
            <div class="menu-detail" v-for="(item, index) in menuList" :key="index">
                {{item}}
            </div>
        </ul>
        <Login/>
    </div>
</template>
<script>
import Login from './Login'
export default {
    name: 'MenuBar',
    components: {
        Login
    },
    data() {
    return {
        menuList : ["회사소개", "제품소개", "고객지원", "공지사항", "쇼핑몰"]        
    };
},
}
</script>
<style scoped>
#logo{
    width: 20%;
    height: 10%;
}
.menu{
    display: flex;
    width: 100%;
    height: 20%;
}
.menu-list{
    display: flex;
}
.menu-detail{
    padding: 10px;
}
.Login{
    margin-top: 15px;
    padding: 10px;
}
</style>