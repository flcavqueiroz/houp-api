from .models import Home, Work, Case, Price, FAQ, Blog, CheckOut
from rest_framework import serializers
from houpapp.registration.models import Registration, Login


class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Home
        fields = ['id', 'home', 'name', 'home_email']


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
        fields = ['id', 'um_ambiente', 'dois_ambientes', 'tres_ambientes']

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


class CheckOutSerializer(serializers.ModelSerializer):


    class Meta:
        model = CheckOut
        fields = ['id', 'email', 'api_key', 'source_id', 'target_type', 'target_id', 'card_name', 'card_number', 'card_cvv', 'expiration_date']

