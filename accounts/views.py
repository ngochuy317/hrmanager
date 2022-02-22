from datetime import datetime
from lib2to3.pgen2 import token
from django.shortcuts import render
from rest_framework import generics,views
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .models import User
from .serializer import UserSerializer
from rest_framework.permissions import AllowAny
import jwt , datetime
# Create your views here.

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class LoginView(views.APIView):
    def post(self, request, *args, **kwargs):
        username = request.data['username']
        password = request.data['password']

        user = User.objects.filter(username=username).first()
        if user is None:
            raise AuthenticationFailed("Username not found")
        if not user.check_password(password):
             raise AuthenticationFailed("Incorrect password")
        
        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes= 60),
            'iat': datetime.datetime.utcnow()
        }
        print(payload)
        token = jwt.encode(payload, "secret", algorithm="HS256")

        res = Response()

        res.set_cookie(key='jwt', value=token, httponly=True)
        res.data = {
            "jwt": token,
        }

        return res
class LogoutView(views.APIView):
    def get(self, request):
        res = Response()
        res.delete_cookie(key='jwt')
        res.data = {
            "messages": "Logout success"
        }
        return res


class TestView(views.APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed("Unauthenticated !")
            
        try:
            payload = jwt.decode(token, "secret", algorithms=["HS256"])

        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Unauthenticated !")

        user = User.objects.filter(id = payload['id']).first()
        serializer = UserSerializer(user)  
        
        return Response(serializer.data)
