<template lang="">
    <div class="menu">
        <router-link id="logo-img" to="/">
            <img 
               id="logo" 
               alt="logo" 
               src="../assets/cocacolaLogo.jpeg"
            >
        </router-link>
        <div class="menu-list">
            <router-link id="menu-router" to="/company" @click="initSubMenu">회사소개</router-link>
            <nav id="menu-router" @click="showProduct">
            제품소개
            </nav>
            <nav id="menu-router" @click="showSupport">
            고객지원
            </nav>
            <router-link id="menu-router" to="/notice" @click="initSubMenu">공지사항</router-link>
            <a id="menu-router" :href="mallLink.url" :target="mallLink.target">쇼핑몰</a>
            <Login id="menu-router"/>
        </div>
    </div>
    <div id="sub-menu" v-show="toShowProductList">
        <router-link id="menu-router" to="/product1"> 상품1 </router-link>
        <router-link id="menu-router" to="/product2"> 상품2 </router-link>
        <router-link id="menu-router" to="/product3"> 상품3 </router-link>
        <router-link id="menu-router" to="/product4"> 상품4 </router-link>
    </div>
    <div id="sub-menu" v-show="toShowSupportList">
        <router-link id="menu-router" to="/faq"> 자주묻는질문 </router-link>
        <router-link id="menu-router" to="/qna"> 1대1 문의 </router-link>
        <router-link id="menu-router" to="/support"> 고객지원 </router-link>
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
            mallLink: {
                 url: "https://www.naver.com",
                 target: "_blank"
            },
            toShowProductList: false,
            toShowSupportList: false,
        };
    },
    methods: {
        initSubMenu(){
            this.toShowProductList = false;
            this.toShowSupportList = false;
        },
        showProduct(){
            this.toShowProductList = !this.toShowProductList
            if(this.toShowSupportList){
                this.toShowSupportList = false;
            }
        },
        showSupport(){
            this.toShowSupportList = !this.toShowSupportList
            if(this.toShowProductList){
                this.toShowProductList = false
            }
        },
    },
}
</script>
<style scoped>
.menu{
    display: flex;
    width: 100%;
    height: 20%;
}
#logo-img{
    width: 20%;
}
#logo{
    width: 100%;
    height: 100%;
}
.menu-list{
    display: flex;
    width: 80%;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
}
.menu{
    background-color: white;
}
#sub-menu{
    display: flex;
    justify-content: space-between;
    background-color: #FAE8E8;
    padding-left: 30%;
    padding-right: 30%
}
#menu-router{
    color: black;
    text-decoration: none;
    font-size: 120%;
}
</style>