from django.db import models

# Create your models here.


class Home(models.Model):
    home = models.CharField(max_length=10)
    name = models.CharField(max_length=20)
    home_email = models.EmailField()

    def __str__(self):
        return self.home


class Work(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name 

class Case(models.Model):
    name = models.CharField(max_length=20)

class Price(models.Model):
    um_ambiente = models.IntegerField()
    dois_ambientes = models.IntegerField()
    tres_ambientes = models.IntegerField()
    

class FAQ(models.Model):
    question = models.CharField(max_length=100)
    answer = models.CharField(max_length=100)

class Blog(models.Model):
    name = models.CharField(max_length=50)
    link = models.URLField()


class CheckOut(models.Model):
    email = models.ForeignKey(Home, related_name='email', on_delete=models.CASCADE)
    api_key = models.CharField(max_length=100)
    source_id = models.CharField(max_length=100)
    target_type = models.CharField(max_length=20)
    target_id = models.CharField(max_length=20)
    card_name = models.ForeignKey(Home, related_name='card_name', on_delete=models.CASCADE)
    card_number = models.IntegerField()
    card_cvv = models.IntegerField()
    expiration_date = models.DateField()

    def __str__(self):
        return self.email
