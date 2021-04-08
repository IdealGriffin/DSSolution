from django.shortcuts import render
from rest_framework import viewsets,generics, views
from rest_framework.response import Response
from .models import *
from .serializer import *

from rest_framework import mixins

#Create your views here.
admin_names=['Company_Introduce','Company_History','Company_Certificate','FaQ','QnA_Answer','QnA_Question','Banner','News','Product','Product_summary','Product_detail', 'Cooporate', 'Notice']
view_names=['Company_Introduce','Company_History','Company_Certificate']

for name in view_names: #단순 참조용.
    exec(
    "class "+name+"View(generics.ListAPIView):\n"+
    "   queryset="+name+".objects.all()\n"+
    "   serializer_class="+name+"Serializer\n"
    )

for name in admin_names: #관리를 위해 삽입 수정 삭제 모든게 가능함
    exec(
    "class "+name+"Admin(viewsets.ModelViewSet):\n"+
        "   queryset="+name+".objects.all()\n"+
        "   serializer_class="+name+"Serializer"
    )


# class App2ViewSet(viewsets.ModelViewSet):
#     queryset = App2.objects.all()
#     serializer_class = App2Serializer

# class AppViewList(generics.ListCreateAPIView):
#     serializer_class = AppSerializer
#     def get_queryset(self):
#         queryset = App.objects.all()
#         try:
#             pk = self.kwargs['pk']
#             queryset = queryset.filter(id=pk)
#         except:
#             pass
#         return queryset

class Banner_Main(generics.ListAPIView):
    queryset = Banner.objects.all()
    serializer_class = BannerSerializer

# Latest_News는 generics.ListAPIView를 상속받는 것
class Latest_News(generics.ListAPIView):
    def get_object(self):
        try:
            return News.objects.last()
        except:
            raise Http404
    def get(self, request, format=None):
        snippet = self.get_object()
        serializer = NewsSerializer(snippet)
        return Response(serializer.data)

    
class Latest_Notice(generics.ListAPIView):
    def get_object(self):
        try:
            return Notice.objects.last()
        except:
            raise Http404
    def get(self, request, format=None):
        snippet = self.get_object()
        serializer = NoticeSerializer(snippet)
        return Response(serializer.data)

class Product_Detail(views.APIView):
    def get_object(self, pk):
        try:
            return Product_detail.objects.get(pk=pk)
        except:
            raise Http404
    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = Product_detailSerializer(snippet)
        return Response(serializer.data)

    
    