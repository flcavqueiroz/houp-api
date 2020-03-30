from .models import Home, Work, Case, Price, FAQ, Blog
from rest_framework import serializers
from houpapp.registration.models import Registration, Login




class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Home
        fields = ['id', 'home', 'name', 'email']


class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Work
        fields = ['id', 'name']

class CaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Case
        fields = ['id', 'name']

class PriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Price
        fields = ['id', 'first_value', 'second_value', 'third_value']

class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = ['id', 'question', 'answer']

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'name', 'link']


class RegistrationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Registration
        fields = ['id', 'name', 'phone', 'cpf', 'password', 'password_confirm']