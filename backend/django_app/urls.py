from django.conf import settings
from django.conf.urls.static import static
from django.urls import re_path, path, include
from rest_framework.routers import DefaultRouter
import os
from . import views

#Create your views here.


router = DefaultRouter()
router.register("notice",views.NoticeAdmin)
router.register("news", views.NewsAdmin)
router.register("shop", views.ShopAdmin)
router.register("qna", views.QnA_QuestionAdmin)
router.register("qna/answer", views.QnA_AnswerAdmin)
router.register("faq",views.FaQAdmin)
router.register("location",views.LocationAdmin)
router.register("group",views.GroupAdmin)
router.register("product",views.ProductAdmin)
router.register("product/description",views.Product_descriptionAdmin)
router.register("company/introduce",views.Company_IntroduceAdmin)
router.register("company/history",views.Company_HistoryAdmin)
router.register("company/certificate",views.Company_CertificateAdmin)
router.register("banner",views.BannerAdmin)
router.register("notice",views.NoticeAdmin)
router.register("news",views.NewsAdmin)
router.register("location",views.LocationAdmin)
router.register("cooporate",views.CooporateAdmin)
  
urlpatterns=[
    path('',include(router.urls)),

    #last pages
    path('notice/last/', views.NoticeLastAdmin.as_view()),
    path('news/last/', views.NewsLastAdmin.as_view()),

    #FaQ
    path('faq/<str:kind>/',views.FaQ_KindAdmin.as_view()),
    #media
]   +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)