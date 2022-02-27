from hr.models.salary import Salary
from hr.models.employee import Employee
from hr.serializers.salary import SalarySerializer, SalarySerializerPostMethod

from ..serializers import *
from ..permissions import *

from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView


class SalaryViewDetail(APIView):
    permission_classes = [AllowAnyUserPermission]

    def get(self, request, *args, **kwargs):

        id = kwargs.get("id", None)
        month = kwargs.get("month", None)
        year = kwargs.get("year", None)
        if id and month and year:
            employee = Employee.objects.filter(id=id).first()
            if employee:
                salary = Salary.objects.filter(employee=employee).filter(month=month).filter(year=year).first()
                if salary:
                    serializer = SalarySerializer(salary)
                    response = Response()
                    response.data = serializer.data
                    return response
                return Response("Can not find salary", status=status.HTTP_400_BAD_REQUEST)
            return Response("Employee does not exit", status=status.HTTP_400_BAD_REQUEST)
        return Response("Wrong format parameters", status=status.HTTP_400_BAD_REQUEST)

class SalaryViewSet(APIView):
    permission_classes = [AllowAnyUserPermission]

    def get(self, request, *args, **kwargs):

        salary = Salary.objects.all()
        serializer = SalarySerializer(salary, many=True)
        response = Response()
        response.data = serializer.data
        return response

    def post(self, request, *args, **kwargs):
        serializer = SalarySerializerPostMethod(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
