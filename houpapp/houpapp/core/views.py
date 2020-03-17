from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache

# Create your views here.
#from django.contrib.auth.models import Home, Work, Case, Price, FAQ, Blog
from rest_framework import viewsets
from houpapp.core.serializers import HomeSerializer, WorkSerializer, CaseSerializer, PriceSerializer, BlogSerializer, FAQSerializer
from houpapp.core.models import Home, Work, Case, Price, FAQ, Blog

index = never_cache(TemplateView.as_view(template_name='index.html'))



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

