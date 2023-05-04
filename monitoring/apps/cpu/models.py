from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils.translation import gettext_lazy as _

from .managers import CpuLoadManager

# Create your models here.


class CpuLoad(models.Model):
    """Мониторинг загрузки процессора"""
    created_at = models.DateTimeField(
        _('Creation date and time'), auto_now_add=True,
    )
    value = models.FloatField(
        _('CPU usage in percent'),
        default=0.0,
        validators=[MinValueValidator(0.0), MaxValueValidator(100.0)],
    )

    objects = CpuLoadManager()
