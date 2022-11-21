from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.http import require_GET, require_POST, require_http_methods, require_safe
from .models import MVTI
# from django.http import JsonResponse, HttpResponse

# Create your views here.
@require_POST
def index(request):
    mvti = MVTI.objects.all()
    context = {
        'MVTI': mvti
    }
    return render(request, 'MVTI/index.html', context)