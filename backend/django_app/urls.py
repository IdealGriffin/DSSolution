from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# router 를 새로 만든다.
router = DefaultRouter()
router.register('App', views.AppViewSet)
urlpatterns = [ 
    path('', include(router.urls)) 
]
