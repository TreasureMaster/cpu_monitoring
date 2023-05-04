from django.urls import path

from . import views


app_name = 'cpu'

urlpatterns = [
    path('dashboard/', views.CpuLoadView.as_view(), name='dashboard'),
    path('materials/', views.BaseListResource.as_view(), name='list'),
]
