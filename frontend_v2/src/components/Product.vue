<template lang="">
    <div class="Product">
        <!-- <div id="top-banner">
            <img id="product-banner-img" src="../assets/product_detail1.jpg" alt="top-banner">
            <div id="product-head">
                <h2>{{title}}</h2>
            </div>
        </div> -->
        <b-card
            overlay
            img-src="https://picsum.photos/900/250/?image=3"
            img-alt="Card Image"
            text-variant="white"
            title="Image Overlay"
            sub-title="Subtitle"
        >
            <b-card-text>
            Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
        </b-card>
        <div id="products-list">
            <b-card-group>
                <div v-for="(item, id) in products" :key="id">
                    <router-link id="card-link" :to="`/product/detail/${item.id}`">
                        <b-card :title="item.title" :img-src="item.url" img-alt="image" img-top align="center">
                            <b-card-text>
                                <p>{{item.contents}}</p>
                                <p>{{item.price}}</p>
                            </b-card-text>
                        </b-card>
                    </router-link>
                </div>
            </b-card-group>
        </div>
        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            align="center"
            >
        </b-pagination>
    </div>
</template>
<script>
export default {
    name: 'Product',
    // 여기 이름도 동적으로 가져와서 하나만 보여주면 될 듯
    data() {
        return {
            title: "Title1",
            products: [
                {
                    id: 1,
                    title: "이름1",
                    contents: "컨텐츠1",
                    url: "https://picsum.photos/250/250/?image=54",
                    price: 1000
                },
                {
                    id: 2,
                    title: "이름2",
                    contents: "컨텐츠2",
                    url: "https://picsum.photos/250/250/?image=54",
                    price: 2000
                },
                {
                    id: 3,
                    title: "이름3",
                    contents: "컨텐츠3",
                    url: "https://picsum.photos/250/250/?image=54",
                    price: 3000
                },
                {
                    id: 4,
                    title: "이름4",
                    contents: "컨텐츠4",
                    url: "https://picsum.photos/250/250/?image=54",
                    price: 4000
                },
                {
                    id: 5,
                    title: "이름5",
                    contents: "컨텐츠5",
                    url: "https://picsum.photos/250/250/?image=54",
                    price: 5000
                },
                {
                    id: 6,
                    title: "이름6",
                    contents: "컨텐츠6",
                    url: "https://picsum.photos/250/250/?image=54",
                    price: 6000
                },
                {
                    id: 7,
                    title: "이름7",
                    contents: "컨텐츠7",
                    url: "https://picsum.photos/250/250/?image=54",
                    price: 7000
                },
            ]
        }
    }
}
</script>
<style scoped>
#top-banner{
    max-width: 1080px;
    margin: 0 auto;
    position: relative;
}
#product-banner-img{
    width: 1080px;
    height: 200px;
}
#product-head{
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate( -50%, -50%);
}
#products-list{
    max-width: 1080px;
    margin: 0 auto;
    padding-top: 20px;
    justify-content: space-between;
}
.card{
    padding-left: 10px;
    padding-right: 10px;
    border: 0;
    margin: 0 auto;
    float: none;
}
.card-group{
    max-width: 100%;
    margin: 0 auto;
}
#card-link{
    text-decoration: none;
    color: black;
}
    
</style>