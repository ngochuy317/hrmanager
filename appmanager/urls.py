from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('template.urls')),
    path('a/api/', include('hr.urls')),
   
]
