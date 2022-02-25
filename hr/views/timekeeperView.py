from accounts.models import User

from hr.models.timekeeper import Timekeeper
from hr.models.employee import Employee

from ..serializers import *
from ..permissions import *

from rest_framework import status
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

import jwt


class TimekeeperViewSet(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, *args, **kwargs):

        employeename = kwargs.get("employeename", None)
        employee = Employee.objects.filter(name=employeename).first()
        if employee:
            timekeeper = Timekeeper.objects.filter(employee=employee).order_by('id')
            serializer = TimeKeeperSerializer(timekeeper, many=True)
            response = Response()
            response.data = serializer.data
            return response
        return Response("Employee does not exit", status=status.HTTP_400_BAD_REQUEST)

    def post(self, request, *args, **kwargs):
        serializer = TimeKeeperSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)