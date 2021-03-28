<template lang="">
    <div id="menu">
        <b-navbar toggleable="sm">
            <b-navbar-brand href="/">
                <img 
                id="logo" 
                alt="logo" 
                src="../assets/cocacolaLogo.jpeg"
                >
            </b-navbar-brand>
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
            <b-collapse id="nav-text-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#/company">
                        <a id="menu-router">회사소개</a>
                    </b-nav-item>
                    <b-nav-item-dropdown toggle-class="text-decoration-none" no-caret>
                        <template #button-content>
                            <span id="menu-router"> 제품소개 </span>
                        </template>
                        <b-dropdown-item href="#/product1">
                            <span id="sub-item">상품1</span>
                        </b-dropdown-item>
                        <b-dropdown-item href="#/product2">
                            <span id="sub-item">상품2</span>
                        </b-dropdown-item>
                        <b-dropdown-item href="#/product3">
                            <span id="sub-item">상품3</span>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown toggle-class="text-decoration-none" no-caret>
                        <template #button-content>
                            <span id="menu-router"> 고객지원 </span>
                        </template>
                        <b-dropdown-item href="#/faq">
                            <span id="sub-item">자주 묻는 질문</span>
                        </b-dropdown-item>
                        <b-dropdown-item href="#/qna">
                            <span id="sub-item">1대1 문의</span>
                        </b-dropdown-item>
                        <b-dropdown-item href="#/support">
                            <span id="sub-item">고객지원</span>
                        </b-dropdown-item>
                        <b-dropdown-item href="#/support/news">
                            <span id="sub-item">뉴스</span>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item href="#/notice">
                        <a id="menu-router">공지사항</a>
                    </b-nav-item>
                    <b-nav-item :href="mallLink.url" :target="mallLink.target">
                        <a id="menu-router">
                        쇼핑몰
                        </a>
                    </b-nav-item>
                    <b-nav-item href="#/login">
                        <a id="menu-router">
                        Login
                        </a>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <!-- <div id="sub-menu" v-show="toShowProductList">
            <router-link id="menu-router" to="/product1"> 상품1 </router-link>
            <router-link id="menu-router" to="/product2"> 상품2 </router-link>
            <router-link id="menu-router" to="/product3"> 상품3 </router-link>
            <router-link id="menu-router" to="/product4"> 상품4 </router-link>
        </div>
        <div id="sub-menu" v-show="toShowSupportList">
            <router-link id="menu-router" to="/faq"> 자주묻는질문 </router-link>
            <router-link id="menu-router" to="/qna"> 1대1 문의 </router-link>
            <router-link id="menu-router" to="/support"> 고객지원 </router-link>
        </div> -->
    </div>
</template>
<script>
export default {
    name: 'MenuBar',
    components: {
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
#menu{
    background-color: white;
    max-width: 1024px;
    margin: 0 auto;
}
#nav-text-collapse{
    align-items: center;
}
.navbar-nav{
    width: 100%;
    justify-content: space-between;
}
#logo{
    width: 300px;
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
    font-size: 24px;
}
#sub-item{
    font-size: 20px;
}
</style>