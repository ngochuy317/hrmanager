from hr.models.timekeeper import Timekeeper
from hr.models.employee import Employee
from rest_framework.response import Response
from ..serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
import jwt
from rest_framework.exceptions import AuthenticationFailed
from accounts.models import User
from rest_framework import status

class TimekeeperViewSet(APIView):
    def get(self, request):
        timekeeper = Timekeeper.objects.all().order_by('id')
        serializer = TimeKeeperSerializer(timekeeper, many=True)
        response = Response()
        response.data = serializer.data
        return response

    def post(self, request, *args, **kwargs):
        serializer = TimeKeeperSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)