from django.urls import path
from houpapp.core import views
 
urlpatterns = [
    path('', views.index)
]