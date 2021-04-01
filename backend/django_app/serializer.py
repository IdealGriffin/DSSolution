from rest_framework import serializers
from .models import *

admin_names=['Company_Introduce','Company_History','Company_Certificate','FaQ','QnA_Answer','QnA_Question']
# Create your models here.
for name in admin_names:
	exec(
	"class "+name+"Serializer(serializers.ModelSerializer):\n"+
	"	class Meta:\n"+
	"		model = "+name+"\n"+
	"		fields = '__all__'"
	)