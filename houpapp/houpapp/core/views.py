from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from houpapp.houpapp.core.serializers import HomeSerializer, WorkSerializer, CaseSerializer, PriceSerializer, BlogSerializer, FAQSerializer, RegistrationSerializer, CheckOutSerializer
from houpapp.houpapp.core.models import Home, Work, Case, Price, FAQ, Blog, CheckOut
from houpapp.houpapp.registration.models import Registration, Login


class HomeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Home.objects.all().order_by('id')
    serializer_class = HomeSerializer


class WorkViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Work.objects.all()
    serializer_class = WorkSerializer

class CaseViewSet(viewsets.ModelViewSet):

    queryset = Case.objects.all()
    serializer_class = CaseSerializer

class PriceViewSet(viewsets.ModelViewSet):

    queryset = Price.objects.all()
    serializer_class = PriceSerializer

class FAQViewSet(viewsets.ModelViewSet):

    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer

class BlogViewSet(viewsets.ModelViewSet):

    queryset = Blog.objects.all()
    serializer_class = BlogSerializer


class RegistrationViewSet(viewsets.ModelViewSet):

    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer


class CheckOutViewSet(viewsets.ModelViewSet):

    queryset = CheckOut.objects.all()
    serializer_class = CheckOutSerializer