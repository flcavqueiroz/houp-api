from django.shortcuts import render
from houpapp.registration.forms import RegistrationForm
from django.http import HttpResponseRedirect, Http404
from django.core import mail
from django.template.loader import render_to_string
from django.contrib import messages
from django.conf import settings
from houpapp.registration.models import Registration



# Create your views here.
def registration(request):
    if request.method == 'POST':
        return create(request)
    else:
        return new(request)


def create(request):
    form = RegistrationForm(request.POST)

    if not form.is_valid():
        return render(request, 'registration/registration_form.html',
                        {'form': form})
        
    registration = Registration.objects.create(**form.cleaned_data)
    # Send registration email
    _send_mail('Confirmação de cadastro',
                settings.DEFAULT_FROM_EMAIL,
                registration.email,
                'registration/registration_email.txt',
                {'registration': registration})
    
    return HttpResponseRedirect(f'/cadastro/{registration.pk}/')
    
        

def new(request):
    return render(request, 'registration/registration_form.html', 
                    {'form': RegistrationForm()})

def detail(request, pk):
    try:
        registration = Registration.objects.get(pk=pk)
    except Registration.DoesNotExist:
        raise Http404
    return render(request, 'registration/registration_detail.html',
                    {'registration': registration   })



def _send_mail(subject, from_, to, template_name, context):
    body = render_to_string(template_name, context)
    mail.send_mail(subject, body, from_, [from_, to])
