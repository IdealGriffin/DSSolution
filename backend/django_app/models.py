from django.db import models

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
	models.ImageField()

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
	question_number = models.ForeignKey("QnA_Question", on_delete=models.CASCADE)


class Banner(models.Model):
	location = models.CharField(max_length=50)
	name = models.CharField(max_length=50)

class News(models.Model):
	title = models.CharField(max_length=50)
	contents = models.TextField()
	image_url = models.CharField(max_length=50)
	date = models.DateTimeField(auto_now=False, auto_now_add=False)

class Notice(models.Model):
	title = models.CharField(max_length=50)
	contents = models.TextField()
	date = models.DateTimeField(auto_now=False, auto_now_add=False)

class Cooporate(models.Model):
	name = models.CharField(max_length=50)
	image_url = models.CharField(max_length=50)


class Product(models.Model):
	kind = models.IntegerField()
	name = models.CharField(max_length=50)
	introduce = models.TextField()
	image_url = models.CharField(max_length=50)

class Product_summary(models.Model):
	name = models.CharField(max_length=50)
	kind = models.ForeignKey("Product", on_delete=models.CASCADE)
	price = models.IntegerField()
	summary = models.TextField()

class Product_detail(models.Model):
	name = models.ForeignKey("Product_summary", on_delete=models.CASCADE, unique=True)
	detail = models.TextField()
