from django.shortcuts import render,get_object_or_404
from rest_framework import viewsets,generics, views
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import *
from .serializer import *
from .pagination import StandardResultsSetPagination

#Company
class Company_IntroduceAdmin(viewsets.ModelViewSet):
    queryset=Company_Introduce.objects.order_by("-id")
    serializer_class=Company_IntroduceSerializer

class Company_HistoryAdmin(viewsets.ModelViewSet):
    queryset=Company_History.objects.all()
    serializer_class=Company_HistorySerializer

class Company_CertificateAdmin(viewsets.ModelViewSet):
    queryset=Company_Certificate.objects.all()
    serializer_class=Company_CertificateSerializer

#FaQ
class FaQAdmin(viewsets.ModelViewSet):
    lookup_value_regex = '[0-9]+' 
    queryset=FaQ.objects.order_by("-id")
    serializer_class=FaQSerializer
    pagination_class=StandardResultsSetPagination
    def get_queryset(self):
        search = self.request.query_params.get('search','')
        if search:
            self.queryset=self.queryset.filter(title__contains=search)
        return self.queryset
class FaQ_KindAdmin(generics.ListAPIView):
    serializer_class=FaQSerializer
    pagination_class=StandardResultsSetPagination
    def get_queryset(self):
        kind=""
        try: kind = self.kwargs['kind']
        except: print('Error: Have not kwargs')

        if kind.upper()=="TOP10": queryset=FaQ.objects.filter(top10__gt=0).order_by("top10")
        else: queryset=FaQ.objects.filter(kind__contains=kind).order_by("-id")

        return queryset


#QnA
class QnA_AnswerAdmin(viewsets.ModelViewSet):
    queryset=QnA_Answer.objects.all()
    serializer_class=QnA_AnswerSerializer
class QnA_QuestionAdmin(viewsets.ModelViewSet):
    lookup_value_regex = '[0-9]+' 
    queryset=QnA_Question.objects.all()
    serializer_class=QnA_QuestionSerializer
    def get_queryset(self):
        search = self.request.query_params.get('search','')
        if search:
            self.queryset=self.queryset.filter(contents__contains=search)
        return self.queryset
    @action(['GET'],True)
    def answer(self,request,pk=None):
        queryset=QnA_Answer.objects.filter(question_number=pk)
        serializer=QnA_AnswerSerializer(queryset,many=True)
        return Response(serializer.data)


class BannerAdmin(viewsets.ModelViewSet):
    queryset=Banner.objects.all()
    serializer_class=BannerSerializer

#News
class NewsAdmin(viewsets.ModelViewSet):
    lookup_value_regex = '[0-9]+' 
    queryset=News.objects.order_by("-id")
    serializer_class=NewsSerializer
class NewsLastAdmin(generics.ListAPIView):
    queryset=News.objects.order_by("-id")[:1]
    serializer_class=NewsSerializer

#Notice
class NoticeAdmin(viewsets.ModelViewSet):
    lookup_value_regex = '[0-9]+' 
    queryset=Notice.objects.order_by("-id")
    serializer_class=NoticeSerializer
    pagination_class=StandardResultsSetPagination
    @action(['GET'],False)
    def important(self,request):
        queryset=Notice.objects.order_by("-id").filter(important=True)
        serializer=NoticeSerializer(queryset,many=True)
        return Response(serializer.data)

class NoticeLastAdmin(generics.ListAPIView):
    queryset=Notice.objects.order_by("-id")[:1]
    serializer_class=NoticeSerializer

#Cooporate
class CooporateAdmin(viewsets.ModelViewSet):
    queryset=Cooporate.objects.all()
    serializer_class=CooporateSerializer


class ShopAdmin(viewsets.ModelViewSet):
    queryset=Notice.objects.order_by("-id")
    queryset=Shop.objects.all()
    serializer_class=ShopSerializer

class LocationAdmin(viewsets.ModelViewSet):
    queryset=Location.objects.all()
    serializer_class=LocationSerializer

class GroupAdmin(viewsets.ModelViewSet):
    lookup_value_regex = '[0-9]+' 
    queryset=Group.objects.all()
    serializer_class=GroupSerializer
    @action(['GET'],True)
    def product(self,request,pk=None):
        queryset=Product.objects.filter(pid=pk)
        serializer=ProductSerializer(queryset,many=True)
        return Response(serializer.data)

class ProductAdmin(viewsets.ModelViewSet):
    lookup_value_regex = '[0-9]+'
    queryset=Product.objects.all()
    serializer_class=ProductSerializer
    @action(['GET'],True)
    def descript(self,request,pk=None):
        queryset=Product_description.objects.filter(psid=pk)
        serializer=Product_descriptionSerializer(queryset,many=True)
        return Response(serializer.data)
    
class Product_descriptionAdmin(viewsets.ModelViewSet):
    queryset=Product_description.objects.all()
    serializer_class=Product_descriptionSerializer
