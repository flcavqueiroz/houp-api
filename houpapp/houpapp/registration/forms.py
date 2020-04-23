from django import forms
from .models import Registration, Login

class RegistrationForm(forms.Form):
    name = forms.CharField(label = 'Nome')
    email = forms.EmailField(label = 'Email')
    phone = forms.CharField(label = 'Telefone')
    cpf = forms.CharField(label = 'CPF')
    password = forms.CharField(label = 'Senha', widget=forms.PasswordInput())
    password_confirm = forms.CharField(label = 'Confirme sua senha', widget=forms.PasswordInput())


    class Meta:
        model = Registration
        fields = ('email', )

   
   
class LoginForm(forms.Form):
    email = forms.EmailField(label = 'Email')
    password = forms.PasswordInput()


    class Meta:
        model = Login
        fields = ('email', )
   
   
   
