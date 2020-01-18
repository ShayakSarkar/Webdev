from django.http import HttpResponse
from django.shortcuts import render

def template_giver(request):
    return render(request,"index.html")

def home_page(request):
    return HttpResponse('<h1>Hello World</h1>')

def about_page(request):
    return HttpResponse('<h1>AboutUs</h1>')

def my_info(request):
    return HttpResponse('<h1>My Info</h1>')


