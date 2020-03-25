from django import forms
from .models import Registration

class RegistrationForm(forms.Form):
    email = forms.EmailField(widget=forms.TextInput(attrs={
        "type": "email",
        "name": "email",
        "id": "email",
        "placeholder": "Type your email address",
    }), label="")

    class Meta:
        model = Registration
        fields = ('email', )

   
   
class LoginForm(forms.Form):
    email = forms.EmailField(label = 'Email')
    password = forms.PasswordInput()
   
   
   
