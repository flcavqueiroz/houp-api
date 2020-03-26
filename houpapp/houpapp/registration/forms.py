from django import forms
from .models import Registration, Login

class RegistrationForm(forms.Form):
    name = forms.CharField(max_length=50)
    email = forms.EmailField(label = 'Email')
    phone = forms.CharField(max_length=11)
    cpf = forms.CharField(max_length=11)
    password = forms.CharField()
    password_confirm = forms.CharField()


    class Meta:
        model = Registration
        fields = ('email', )

   
   
class LoginForm(forms.Form):
    email = forms.EmailField(label = 'Email')
    password = forms.PasswordInput()


    class Meta:
        model = Login
        fields = ('email', )
   
   
   
