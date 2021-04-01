from django.shortcuts import render
from rest_framework import viewsets,generics
from .models import *
from .serializer import *

admin_names=['Company_Introduce','Company_History','Company_Certificate','FaQ','QnA_Answer','QnA_Question']
view_names=['Company_Introduce','Company_History','Company_Certificate']

for name in view_names: #단순 참조용.
    exec(
    "class "+name+"View(generics.CreateAPIView):\n"+
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