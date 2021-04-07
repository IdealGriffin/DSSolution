from django.urls import re_path, path, include
from rest_framework.routers import DefaultRouter
from . import views

#Create your views here.
admin_names=['Company_Introduce','Company_History','Company_Certificate','FaQ','QnA_Answer','QnA_Question','Banner','News','Product','Product_summary','Product_detail', 'Cooporate', 'Notice']

router = DefaultRouter()
for name in admin_names: exec("router.register('"+name+"',views."+name+"Admin)\n")

urlpatterns=[
    path('apiadmin/', include(router.urls)),
    # path('company/introduce/',views.Company_IntroduceAdmin.as_view({'get': 'list'})),
    path('company/introduce/',views.Company_IntroduceView.as_view()),
    
    # 메인페이지
    path('mainpage/banner/info/', views.Banner_Main.as_view()),
    path('mainpage/news/latest/', views.Latest_News.as_view()),
    path('mainpage/notice/latest/', views.Latest_Notice.as_view()),
    path('mainpage/cooporate/', views.CooporateAdmin.as_view({'get' : 'list'})),

    # 상품
    # path('product/<int:pk>/', views.Product_Summary.as_view()),
    path('product/<int:pk>/detail/', views.Product_Detail.as_view()),
    
    # 공지사항
    # path('notice/', views.NoticeAdmin)

    # News   
    # path('news/list/', views.NewsAdmin)
    
]