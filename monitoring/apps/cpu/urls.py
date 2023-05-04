from django.urls import path

from . import views


app_name = 'cpu'

urlpatterns = [
    path('dashboard/', views.CpuLoadView.as_view(), name='dashboard'),
    path('moments/', views.BaseListResource.as_view(), name='list'),
    path('average/', views.AverageListResource.as_view(), name='average_list'),
]
