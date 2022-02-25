# from rest_framework import routers
from .views import *
from django.urls import path

urlpatterns = [
    path('employee/', EmployeeViewSet.as_view(), name='employeee'),
    path('employee/<int:pk>/', EmployeeDetailView.as_view(), name='detail_employee'),
    path('department/', DepartmentViewSet.as_view(), name='department'),
    path('department/<int:pk>/', DepartmentDetailView.as_view(), name='detail_department'),
    path('timekeeper/<str:employeename>/', TimekeeperViewSet.as_view(), name='timekeeper'),
    path('correctaccess/<str:employeename>/', CorrectAccessViewSet.as_view(), name='correctaccess'),
    path('wagerate/', WageRateViewSet.as_view(), name='wagerate'),
]