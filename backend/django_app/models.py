from django.db import models

# Create your models here.
class Company_Introduce(models.Model): 
	image_url = models.ImageField()
	introduce = models.TextField()
	shoppingmall = models.CharField(max_length=50)

class Company_History(models.Model):
	start_year = models.DateField()
	end_year = models.DateField()
	content = models.CharField(max_length=50)

class Company_Main_Business(models.Model):
	name = models.CharField(max_length=50)
	contents = models.TextField()
	image_url = models.ImageField()

class Company_Certificate(models.Model):
	name = models.CharField(max_length=50)
	image_url = models.ImageField()

class FaQ(models.Model):
	title = models.CharField(max_length=50)
	contents = models.TextField()
	kind = models.CharField(max_length=20)
	top10 = models.IntegerField()

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
	image = models.ImageField()
	name = models.CharField(max_length=50)

class News(models.Model):
	title = models.CharField(max_length=50)
	contents = models.TextField()
	image_url = models.ImageField()
	link_url = models.URLField()
	date = models.DateTimeField(auto_now=False, auto_now_add=False)

class Notice(models.Model):
	title = models.CharField(max_length=50)
	contents = models.TextField()
	date = models.DateTimeField(auto_now=False, auto_now_add=False)
	important = models.BooleanField()

class Cooporate(models.Model):
	name = models.CharField(max_length=50)
	image_url = models.ImageField()

class Shop(models.Model):
	url = models.URLField()

class Location(models.Model):
	image_url = models.ImageField()
	address = models.CharField(max_length=200)
	tel = models.CharField(max_length=15)
	fax = models.CharField(max_length=15)

class Group(models.Model):
	name = models.CharField(max_length=50)
	introduce = models.TextField()
	image_url = models.ImageField()

class Product(models.Model):
	pid = models.ForeignKey("Group",related_name="product", on_delete=models.CASCADE)
	name = models.CharField(max_length=50)
	price = models.IntegerField()
	summary = models.TextField()

class Product_description(models.Model):
	psid = models.ForeignKey("Product",related_name="description", on_delete=models.CASCADE, unique=True)
	description = models.TextField()
