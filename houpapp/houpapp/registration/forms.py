from django import forms

class RegistrationForm(forms.Form):
    name = forms.CharField(label = 'Nome')
    cpf = forms.CharField(label = 'CPF')
    email = forms.EmailField(label = 'Email')
    phone = forms.CharField(label = 'Telefone')
    password = forms.CharField(label = 'Senha')
    password_confirm = forms.CharField(label = 'Confirme sua senha')