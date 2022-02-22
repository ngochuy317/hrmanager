from hr.models.employee import Employee
from ..serializers import *
from rest_framework import viewsets, permissions, generics

# Create Employee Viewsets.
# class EmployeeListView(generics.ListCreateAPIView):
#     queryset = Employee.objects.all().order_by('created')
#     serializer_class = EmployeeSerializer
#     permissions_classes = [permissions.IsAuthenticated]
#     pass

# class EmployeeDetailView(generics.RetrieveDestroyAPIView):
#     # queryset = Employee.objects.all().order_by('created')
#     # permissions_classes = [
#     #     permissions.IsAuthenticated
#     # ]
#     # serializer_class = EmployeeSerializer
#     pass

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all().order_by('created')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = EmployeeSerializer