import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

///bootstrap 설정
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//router설정
import VueRouter from 'vue-router'
import MainPage from "./components/MainPage.vue";
import Company from "./components/Company.vue";
import Product from "./components/Product.vue";
import Product2 from "./components/Product2.vue";
import Product3 from "./components/Product3.vue";
import Product4 from "./components/Product4.vue";
import Notice from "./components/Notice.vue";
import News from "./components/News.vue";
import PageDetail from "./components/PageDetail.vue";
import Support from "./components/Support.vue";
import FaQ from "./components/FaQ.vue";
import QnA from "./components/QnA.vue";
import NotFound from "./components/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/company",
    name: "Company",
    component: Company,
  },
  {
    path: "/product1",
    name: "Product",
    component: Product,
  },
  {
    path: "/product2",
    name: "Product2",
    component: Product2,
  },
  {
    path: "/product3",
    name: "Product3",
    component: Product3,
  },
  {
    path: "/product4",
    name: "Product4",
    component: Product4,
  },
  {
    path: "/product/detail/:id",
    name: "ProductDetail",
    component: PageDetail,
  },
  {
    path: "/support",
    name: "Support",
    component: Support,
  },
  {
    path: "/support/news",
    name: "News",
    component: News,
  },
  {
    path: "/support/news/:id",
    name: "NewsDetail",
    component: PageDetail,
  },
  {
    path: "/faq",
    name: "FaQ",
    component: FaQ,
  },
  {
    path: "/qna",
    name: "QnA",
    component: QnA,
  },
  {
    path: "/notice",
    name: "Notice",
    component: Notice,
  },
  {
    path: "/notice/:id",
    name: "NoticeDetail",
    component: PageDetail
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  }
];
Vue.use(VueRouter)

new Vue({
  router: new VueRouter({
    routes
  }),
  render: h => h(App),
}).$mount('#app')
