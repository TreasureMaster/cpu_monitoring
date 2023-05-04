from django.db import models
from django.utils import timezone


class CpuLoadManager(models.Manager):
    """Дополнительные функции менеджера"""
    def with_last_hour_loads(self):
        """Ограничивает данные последним часом"""
        now = timezone.now()
        return self.filter(
            created_at__range=(now - timezone.timedelta(hours=1), now)
        )
