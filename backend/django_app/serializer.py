from rest_framework import serializers
from .models import *

#Create your views here.
admin_names=['Company_Introduce','Company_History','Company_Certificate','FaQ','QnA_Answer',
			'QnA_Question','Banner','News','Group','Product','Product_description', 
			'Cooporate', 'Notice','Shop','Location']

# Create your models here.
for name in admin_names:
	exec(
	"class "+name+"Serializer(serializers.ModelSerializer):\n"+
	"	class Meta:\n"+
	"		model = "+name+"\n"+
	"		fields = '__all__'"
	)