from django.apps import AppConfig
from django.conf import settings


class CpuConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.cpu'

    def ready(self):
        from . import scheduler
        if settings.SCHEDULER_AUTOSTART:
            scheduler.start()
