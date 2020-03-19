from django.db import models

# Create your models here.
class Registration(models.Model):
    name = models.CharField('nome', max_length=100)
    cpf = models.CharField('cpf', max_length=11)
    email = models.EmailField('email')
    phone = models.CharField('telefone', max_length=20)
    password = models.CharField('senha', max_length=12)
    created_at = models.DateTimeField('criado em', auto_now_add=True)

    class Meta:
        verbose_name_plural = 'cadastros'
        verbose_name = 'cadastro'
        ordering = ('-created_at',)
    def __str__(self):
        return self.name

class Login(models.Model):
    login_email = models.ForeignKey(Registration, related_name='login_email', on_delete=models.CASCADE)
    login_password = models.ForeignKey(Registration, related_name='login_password', on_delete=models.CASCADE)

    

