from operator import itemgetter

from django.http import JsonResponse
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
    # ordering = ('created_at',)

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(object_list=object_list, **kwargs)
        context['loads'] = round(len(context['object_list'])/720*100, 2)
        context['idle'] = round(100 - context['loads'], 2)
        # Коррекция, если был период простоя
        now = timezone.now()
        context['starts_at'] = now - timezone.timedelta(hours=1)
        context['ends_at'] = now
        print('loads:', len(context['object_list']))
        return context


class BaseListResource(View):
    def get(self, request):
        qs = list(CpuLoad.objects.with_last_hour_loads().order_by('created_at').values())
        ends_at = timezone.now()
        starts_at = ends_at - timezone.timedelta(hours=1)

        time_labels = update_null(qs, starts_at)
        return JsonResponse({
            'loads': time_labels,
            'ends_at': ends_at, 'starts_at': starts_at
        })


class AverageListResource(View):
    def get(self, request):
        qs = list(
            CpuLoad.objects.with_last_hour_loads().order_by('created_at').values()
        )
        ends_at = timezone.now()
        starts_at = ends_at - timezone.timedelta(hours=1)
        time_labels = update_null(qs, starts_at)
        average_labels = []
        ends = starts_at + timezone.timedelta(minutes=1)
        avg_min = []
        for time_label in time_labels:
            if time_label['created_at'] <= ends:
                avg_min.append(time_label)
            else:
                avg = sum(tl['value'] for tl in avg_min)/len(avg_min)
                average_labels.append({
                    'created_at': ends - timezone.timedelta(seconds=30),
                    'value': avg
                })
                avg_min = [time_label]
                ends = ends + timezone.timedelta(minutes=1)

        return JsonResponse({
            'loads': average_labels,
            'ends_at': ends_at, 'starts_at': starts_at
        })


def update_null(time_labels, start):
    extra_labels = []
    for time_label in time_labels:
        if (time_label['created_at'] - start) > timezone.timedelta(seconds=5):
            extra_labels.append({
                'created_at': start + timezone.timedelta(seconds=5),
                'value': 0
            })
            start = start + timezone.timedelta(seconds=5)
        else:
            start = time_label['created_at']
    time_labels.extend(extra_labels)
    time_labels.sort(key=itemgetter('created_at'))
    return time_labels
