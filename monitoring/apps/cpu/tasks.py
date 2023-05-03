import psutil

from .models import CpuLoad


def save_cpu_load():
    """Сохраняет загрузку CPU на данный момент времени"""
    cpu_load = psutil.cpu_percent()
    CpuLoad.objects.create(value=cpu_load)
