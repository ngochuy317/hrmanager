from hr.models.department import Department
from ..serializers import *
from rest_framework import viewsets, permissions

class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = DepartmentSerializer