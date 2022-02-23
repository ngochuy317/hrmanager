from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

class User(AbstractUser):
    username = models.CharField(max_length=50,unique=True)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=100)
    
    ROLE_CHOICE = [('admin', 'Admin'),('manager', 'Manager'),('user', 'User')]
    role = models.CharField(max_length=10, choices=ROLE_CHOICE, default='user')

    USERNAME_FIELD = 'username'
    REQUIRD_FIELDS = []

    def __str__(self):
        return self.username
