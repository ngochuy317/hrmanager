from hr.models.employee import Employee
from hr.models.department import Department
from .serializers import *
from rest_framework import viewsets, permissions

# Create Employee Viewsets.
class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all().order_by('created')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = EmployeeSerializer

class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = DepartmentSerializer