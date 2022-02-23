from django.shortcuts import get_object_or_404
from rest_framework import status
from hr.models.employee import Employee
from ..serializers import *
from rest_framework import generics,authentication, mixins
from rest_framework.response import Response
import jwt
from rest_framework.exceptions import AuthenticationFailed
from accounts.models import User
# Create Employee Viewsets.
class EmployeeViewSet(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    queryset = Employee.objects.all().order_by('created')
    authentication_classes = [authentication.TokenAuthentication]
    serializer_class = EmployeeSerializer

    def get(self, request, *args, **kwargs):
        headers_auth = request.headers['Authorization']
        if not headers_auth.endswith('Bearer ',0,7):
            raise AuthenticationFailed("Not token format !")
        token = headers_auth.split()[1]
        if not token:
            raise AuthenticationFailed("Unauthenticated !")
        try:
            payload = jwt.decode(token, "secret", algorithms=["HS256"], encoding='utf-8')
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Unauthenticated !")
        user = User.objects.filter(id = payload['id']).first()
        if not user:
            raise AuthenticationFailed("Unauthenticated !")
        return self.list(request)
    def post(self, request):
        headers_auth = request.headers['Authorization']
        if not headers_auth.endswith('Bearer ',0,7):
            raise AuthenticationFailed("Not token format !")
        token = headers_auth.split()[1]
        if not token:
            raise AuthenticationFailed("Unauthenticated !")
        try:
            payload = jwt.decode(token, "secret", algorithms=["HS256"], encoding='utf-8')
            if not User.objects.filter(id = payload['id']).first():
                raise AuthenticationFailed("Unauthenticated !")
            if payload['role'] not in ["admin","manager"]:
                raise AuthenticationFailed("You do not have access!")
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Unauthenticated !")
        return self.create(request)

class EmployeeDetailView(generics.GenericAPIView, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin ):
    queryset = Employee.objects.all().order_by('created')
    authentication_classes = [authentication.TokenAuthentication]
    serializer_class = EmployeeSerializer

    def get(self,request,pk):
        headers_auth = request.headers['Authorization']
        if not headers_auth.endswith('Bearer ',0,7):
            raise AuthenticationFailed("Not token format !")
        token = headers_auth.split()[1]
        if not token:
            raise AuthenticationFailed("Unauthenticated !")
        try:
            payload = jwt.decode(token, "secret", algorithms=["HS256"], encoding='utf-8')
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Unauthenticated !")
        user = User.objects.filter(id = payload['id']).first()
        if not user:
            raise AuthenticationFailed("Unauthenticated !")
        return self.retrieve(request,pk)

    def put(self,request,pk):
        headers_auth = request.headers['Authorization']
        if not headers_auth.endswith('Bearer ',0,7):
            raise AuthenticationFailed("Not token format !")
        token = headers_auth.split()[1]
        if not token:
            raise AuthenticationFailed("Unauthenticated !")
        try:
            payload = jwt.decode(token, "secret", algorithms=["HS256"], encoding='utf-8')
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Unauthenticated !")
        user = User.objects.filter(id = payload['id']).first()
        if not user:
            raise AuthenticationFailed("Unauthenticated !")
        if not user.role in ["admin","manager"]:
            raise AuthenticationFailed("You do not have access!")
        return self.update(request,pk)
    
    def delete(self,request,pk):
        headers_auth = request.headers['Authorization']
        if not headers_auth.endswith('Bearer ',0,7):
            raise AuthenticationFailed("Not token format !")
        token = headers_auth.split()[1]
        if not token:
            raise AuthenticationFailed("Unauthenticated !")
        try:
            payload = jwt.decode(token, "secret", algorithms=["HS256"], encoding='utf-8')
            if not User.objects.filter(id = payload['id']).first():
                raise AuthenticationFailed("Unauthenticated !")
            if payload['role'] not in ["admin","manager"]:
                raise AuthenticationFailed("You do not have access!")
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Unauthenticated !")
        return self.destroy(request,pk)
