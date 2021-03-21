import { createWebHistory, createRouter } from "vue-router";
import MainPage from "../components/MainPage.vue";
import Company from "../components/Company.vue";
import Product from "../components/Product.vue";

import Notice from "../components/Notice.vue";
import News from "../components/News.vue";

import PageDetail from "../components/PageDetail.vue";

import Support from "../components/Support.vue";
import FaQ from "../components/FaQ.vue";
import QnA from "../components/QnA.vue";

import NotFound from "../components/NotFound.vue";

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
    path: "/product",
    name: "Product",
    component: Product,
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

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;