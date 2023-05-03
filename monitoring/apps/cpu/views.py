from django.shortcuts import render


def dashboard(request):
    """Страница мониторинга"""
    return render(request, 'cpu/dashboard.html')
