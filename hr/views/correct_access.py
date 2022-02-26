from accounts.models import User

from hr.models.correct_access import CorrectAccess
from hr.models.employee import Employee

from ..serializers import *
from ..permissions import *

from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView


class CorrectAccessViewSet(APIView):
    permission_classes = (AllowAnyUserPermission,)

    def get(self, request, *args, **kwargs):

        employeename = kwargs.get("employeename", None)
        employee = Employee.objects.filter(name=employeename).first()
        if employee:
            timekeeper = CorrectAccess.objects.filter(employee=employee).order_by('id')
            serializer = CorrectAccessSerializer(timekeeper, many=True)
            response = Response()
            response.data = serializer.data
            return response
        return Response("Employee does not exit", status=status.HTTP_400_BAD_REQUEST)
