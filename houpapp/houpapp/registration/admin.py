from django.contrib import admin
from houpapp.houpapp.registration.models import Registration, Login
from django.utils.timezone import now

class RegistrationModelAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'cpf', 'password', 'created_at',
                    'registered_today')
    date_hierarchy = 'created_at'
    search_fields = ('name', 'email', 'phone', 'cpf', 'password', 'created_at')
    list_filter = ('created_at',)

    def registered_today(self, obj):
        return obj.created_at == now().date()

    registered_today.short_description = 'cadastrado hoje?'
    registered_today.boolean = True

admin.site.register(Registration, RegistrationModelAdmin)


# Register your models here.
