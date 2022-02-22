from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('template.urls')),
    path('api/', include('hr.urls')),
    path('api/user/', include('accounts.urls') )
]
