from django.urls import path

from . import views


app_name = 'cpu'

urlpatterns = [
    path('dashboard/', views.dashboard, name='dashboard'),
]
