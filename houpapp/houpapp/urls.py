
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from houpapp.houpapp.core import views
from houpapp.houpapp.registration.views import detail, login, registration, new, login_register, create, subscribe, password, password_confirm
from django.views.generic import TemplateView



router = routers.DefaultRouter()
router.register(r'home', views.HomeViewSet)
router.register(r'work', views.WorkViewSet)
router.register(r'case', views.CaseViewSet)
router.register(r'price', views.PriceViewSet)
router.register(r'faq', views.FAQViewSet)
router.register(r'blog', views.BlogViewSet)
router.register(r'checkout', views.CheckOutViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('login/', login),
    path('cadastro/', registration),
    path('cadastro/<int:pk>/', detail),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('', include('oauth2_provider.urls', namespace='oauth2_provider')),
    path('', TemplateView.as_view(template_name='public/index.html'))
]