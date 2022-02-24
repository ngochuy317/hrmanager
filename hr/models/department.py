from django.db import models

class Department(models.Model):
    name = models.CharField(max_length=200)
    status = models.BooleanField(default= True)
    parent = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE)
    phone = models.CharField(max_length=18)

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    