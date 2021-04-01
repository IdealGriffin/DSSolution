from django.urls import re_path, path, include
from rest_framework.routers import DefaultRouter
from . import views

#Create your views here.
admin_names=['Company_Introduce','Company_History','Company_Certificate','FaQ','QnA_Answer','QnA_Question']

router = DefaultRouter()
for name in admin_names: exec("router.register('"+name+"',views."+name+"Admin)\n")

urlpatterns=[
    path('apiadmin/', include(router.urls)),
    path('company/introduce/',views.Company_IntroduceView.as_view()),
]