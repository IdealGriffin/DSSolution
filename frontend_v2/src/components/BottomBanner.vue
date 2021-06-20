<template lang="">
    <div class="Bottom-banner">
        <router-link id="logo-img" to="/">
            <img 
               id="logo" 
               alt="logo" 
               src="../assets/cocacolaLogo.jpeg"
            >
        </router-link>
        <div class="company-info">
            <span>{{companyData.companyName}} | 대표이사 : {{companyData.ceo}} | 위치 : {{companyData.location}} | 
                사업자번호 : {{companyData.companyNumber}}
                대표번호 : {{companyData.telephone}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BottomBanner',
    data() {
        return {
            companyData: {
                companyName: "DS solution",
                ceo: "ceo",
                location: "수원시 영통구 ...",
                telephone: "031-111-1111",
                companyNumber: "111-11-11111", 
            },
        };
    },
    methods: {
    },
}
</script>
<style scoped>
.Bottom-banner{
    bottom: 0px;
}
#logo{
    padding-top: 20px;
    width: 10%;
    /* height: 10%; */
}
.company-info{
    padding: 20px;
    font-size: 20px;
}

</style>