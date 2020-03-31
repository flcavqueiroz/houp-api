from django.shortcuts import render
from houpapp.registration.forms import RegistrationForm, LoginForm
from django.http import HttpResponseRedirect, Http404, JsonResponse
from django.core import mail
from django.template.loader import render_to_string
from django.contrib import messages
from django.conf import settings
from houpapp.registration.models import Registration, Login
from .forms import RegistrationForm, LoginForm
from houpapp.utils import SendSubscribeMail

import requests
import json


MAILCHIMP_API_KEY = settings.MAILCHIMP_API_KEY
MAILCHIMP_DATA_CENTER = settings.MAILCHIMP_DATA_CENTER
MAILCHIMP_EMAIL_LIST_ID = settings.MAILCHIMP_EMAIL_LIST_ID

api_url = 'https://{dc}.api.mailchimp.com/3.0'.format(dc=MAILCHIMP_DATA_CENTER)
members_endpoint = '{api_url}/lists/{list_id}/members'.format(
    api_url=api_url,
    list_id=MAILCHIMP_EMAIL_LIST_ID
)



def subscribe(email):
    data = {
        email: email

        }
    r = requests.post(
        members_endpoint,
        auth=("", MAILCHIMP_API_KEY),
        data=json.dumps('data')
    )
    return r.status_code, r.json()



def email_list_signup(request):
    form = RegistrationForm(request.POST)
    if form.is_valid():
        email_signup_qs = LoginForm.objects.filter(email=form.instance.email)
        if email_signup_qs.exists():
            messages.info(request, "You are already subscribed")
        else:
            subscribe(form.instance.email)
            form.save()
    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))


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
                    {'registration': registration})

            
def password(request):
    return render(request, 'registration/registration_form.html',
                    {'form': RegistrationForm()})


def _send_mail(subject, from_, to, template_name, context):
    body = render_to_string(template_name, context)
    mail.send_mail(subject, body, from_, [from_, to])



def login_register(request):
    if request.method == 'POST':
        return create(request)
    else:
        return new(request)



def login(request):
    return render(request, 'registration/login.html',
            {'form': LoginForm()})
