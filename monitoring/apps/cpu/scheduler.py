import logging

import psutil
from django.conf import settings
from apscheduler.schedulers.background import BackgroundScheduler
from django_apscheduler.jobstores import register_events

from .tasks import save_cpu_load


scheduler = BackgroundScheduler(settings.SCHEDULER_CONFIG)


def start():
    # Первая "пустая" информация, создает точку отсчета
    psutil.cpu_percent()

    if settings.DEBUG:
        logging.basicConfig()
        logging.getLogger('apscheduler').setLevel(logging.DEBUG)

    register_events(scheduler)
    scheduler.add_job(
        save_cpu_load, 'interval', seconds=5,
        id='id_cpu_loads', replace_existing=True,
    )

    scheduler.start()
