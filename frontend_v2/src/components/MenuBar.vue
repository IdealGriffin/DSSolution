<template lang="">
    <div id="menu">
        <b-navbar toggleable="lg">
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
                        <b-dropdown-item href="#/product/1">
                            <span id="sub-item">상품1</span>
                        </b-dropdown-item>
                        <b-dropdown-item href="#/product/2">
                            <span id="sub-item">상품2</span>
                        </b-dropdown-item>
                        <b-dropdown-item href="#/product/3">
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
                    <b-nav-item :href="mallLink[0].url">
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
    </div>
</template>
<script>
export default {
    name: 'MenuBar',
    components: {
    },
    data() {
        return {
            mallLink: [{
                 url: "https://www.daum.net",
            },]
        };
    },

    mounted(){
        this.init()
    },
    methods: {
        init(){
            this.getShopUrl()
        },

        getShopUrl(){
            this.axios
            .get('http://localhost:8000/shop')
            .then(response => {
                console.log(response)
                this.mallLink = response.data
            });
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