from django.db import models

company_names=['Introduce','History','Certificate']

# Create your models here.
class Company_Introduce(models.Model): 
	image_url = models.CharField(max_length=50)
	introduce = models.TextField()
	shoppingmall = models.CharField(max_length=50)

class Company_History(models.Model):
	start_year = models.DateField()
	end_year = models.DateField()
	content = models.CharField(max_length=50)

class Company_Main_Business(models.Model):
	name = models.CharField(max_length=50)
	contents = models.TextField()
	image_url = models.CharField(max_length=50)

class Company_Certificate(models.Model):
	name = models.CharField(max_length=50)
	image_url = models.CharField(max_length=50)

class FaQ(models.Model):
	title = models.CharField(max_length=50)
	contents = models.TextField()
	kind = models.CharField(max_length=20)
	top10 = models.BooleanField()

class QnA_Question(models.Model):
	title = models.CharField(max_length=50)
	contents = models.TextField()
	writer = models.CharField(max_length=50)
	date = models.DateField()

class QnA_Answer(models.Model):
	title = models.CharField(max_length=50)
	contents = models.TextField()
	writer = models.CharField(max_length=50)
	date = models.DateField()
	question_number = models.IntegerField()


