# from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.utils import timezone
from django.views.generic import ListView
from django.views import View
from charts_dashboard.objects import BarChart

from .models import CpuLoad


# def dashboard(request):
#     """Страница мониторинга"""
#     return render(request, 'cpu/dashboard.html')


class CpuLoadView(BarChart, ListView):
    """Страница мониторинга"""
    model = CpuLoad
    queryset = CpuLoad.objects.with_last_hour_loads()
    template_name = 'cpu/dashboard.html'
    ordering = ('created_at',)

    def generate_labels(self):
        return ["Africa", "Brazil", "Japan", "EUA"]

    def generate_values(self):
        return [1, 10, 15, 8]
    
    def get_tooltips(self):
        return ["tooltip 1", "tooltip 2", "tooltip 3"]

    # def get_barchart(self):
    #     chart = BarChart()
    #     chart.title = "Example charts title"
    #     chart.labels = ["test 1", "test 2", "test 3", "test 4"]
    #     chart.data = [2, 3, 10, 6]
    #     chart.data_label = "Test"

    #     return chart.build_chart()

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(object_list=object_list, **kwargs)
        context['loads'] = round(len(context['object_list'])/720*100, 2)
        context['idle'] = round(100 - context['loads'], 2)
        # Коррекция, если был период простоя
        now = timezone.now()
        context['starts_at'] = now - timezone.timedelta(hours=1)
        context['ends_at'] = now
        # context["barchart"] = self.get_barchart()
        return context


class BaseListResource(View):
    def get(self, request):
        qs = CpuLoad.objects.with_last_hour_loads().values()
        print('qs:', qs[:5])

        # return self.get_json_response(qs)
        # return HttpResponse('<h1>OK. Ready.</h1>')
        return JsonResponse({'data': list(qs[:5])})
