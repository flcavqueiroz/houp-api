from django import forms


class RegistrationForm(forms.Form):
    name = forms.CharField(label = 'Nome')
    cpf = forms.CharField(label = 'CPF')
    email = forms.EmailField(label = 'Email')
    phone = forms.CharField(label = 'Telefone')
    password = forms.PasswordInput()
    password_confirm = forms.PasswordInput()

   
   
class LoginForm(forms.Form):
    email = forms.EmailField(label = 'Email')
    password = forms.PasswordInput()
   
   
   
