from django.db import models

# Create your models here.
class Registration(models.Model):
    name = models.CharField('nome', max_length=100)
    cpf = models.CharField('cpf', max_length=11)
    email = models.EmailField('email')
    phone = models.CharField('telefone', max_length=20)
    created_at = models.DateTimeField('criado em', auto_now_add=True)
    password = models.CharField('senha', max_length=12)
    
