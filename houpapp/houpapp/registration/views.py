from django.shortcuts import render
from houpapp.houpapp.registration.forms import RegistrationForm, LoginForm
from django.http import HttpResponseRedirect, Http404, JsonResponse
from django.core import mail
from django.template.loader import render_to_string
from django.contrib import messages
from django.conf import settings
from houpapp.houpapp.registration.models import Registration, Login
from .forms import RegistrationForm, LoginForm
from houpapp.houpapp.utils import SendSubscribeMail

import anymail
import mandrill

import requests
import json


MAILGUN_API_KEY = settings.MAILGUN_API_KEY
MAILCHIMP_DATA_CENTER = settings.MAILCHIMP_DATA_CENTER
MAILCHIMP_EMAIL_LIST_ID = settings.MAILCHIMP_EMAIL_LIST_ID

MAILGUN_API_URL = "https://mandrillapp.com/api/1.0"
members_endpoint = f'{MAILGUN_API_URL}/lists/{MAILCHIMP_EMAIL_LIST_ID}/members'




def subscribe(request):
    if request.method == 'POST':
        data = {
            email: 'flcavqueiroz@gmail.com'
        }
        r = requests.post(
        members_endpoint,
        auth=("", MAILGUN_API_KEY),
        data=json.loads('')
        )
        return email_list_signup(request), r.status_code, r.json()
    else:
        return new(request)



def email_list_signup(request):
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


    """ if form.is_valid():
        email_signup_qs = RegistrationForm.objects.filter(email=form.instance.email)
        if email_signup_qs.exists():
            messages.info(request, "You are already subscribed")
        else:
            subscribe(form.instance.email)
            form.save()
 """


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
