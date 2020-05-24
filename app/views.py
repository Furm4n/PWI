from django.shortcuts import render, HttpResponse
from django.utils.encoding import smart_str
from django.core.files import File

def index(request):
    return render(request, 'app/index.html')

def download_file(request):
    file_name = 'kod.zip'
    response = HttpResponse(content_type='application/force-download')
    response['Content-Disposition'] = 'attachment; filename=%s' % smart_str(file_name)
    return response
