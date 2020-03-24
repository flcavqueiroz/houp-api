
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from houpapp.core import views
from houpapp.registration.views import subscribe, email_list_signup, detail, login




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
    path('login/', subscribe),
    path('cadastro/', subscribe),
    path('cadastro/<int:pk>/', detail),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]