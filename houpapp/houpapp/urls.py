"""houpapp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from houpapp.core import views
from houpapp.registration.views import registration, detail


router = routers.DefaultRouter()
router.register(r'home', views.HomeViewSet)
router.register(r'work', views.WorkViewSet)
router.register(r'price', views.PriceViewSet)
router.register(r'case', views.CaseViewSet)
router.register(r'faq', views.FAQViewSet)
router.register(r'blog', views.BlogViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('cadastro/', registration),
    path('cadastro/<int:pk>/', detail),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]