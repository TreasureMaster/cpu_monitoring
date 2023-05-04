# from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.utils import timezone
from django.views.generic import ListView
from django.views import View

from .models import CpuLoad


# def dashboard(request):
#     """Страница мониторинга"""
#     return render(request, 'cpu/dashboard.html')


class CpuLoadView(ListView):
    """Страница мониторинга"""
    model = CpuLoad
    queryset = CpuLoad.objects.with_last_hour_loads()
    template_name = 'cpu/dashboard.html'
    ordering = ('created_at',)

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(object_list=object_list, **kwargs)
        context['loads'] = round(len(context['object_list'])/720*100, 2)
        context['idle'] = round(100 - context['loads'], 2)
        # Коррекция, если был период простоя
        now = timezone.now()
        context['starts_at'] = now - timezone.timedelta(hours=1)
        context['ends_at'] = now
        return context


class BaseListResource(View):
    def get(self, request):
        qs = CpuLoad.objects.with_last_hour_loads().values()
        print('qs:', qs[:5])

        # return self.get_json_response(qs)
        # return HttpResponse('<h1>OK. Ready.</h1>')
        return JsonResponse({'data': list(qs[:5])})
