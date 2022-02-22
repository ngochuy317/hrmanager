from time import time
from django.db import models
from hr.models.employee import Employee

class Timekeeper(models.Model):
    employee = models.ForeignKey(Employee,on_delete = models.CASCADE)
    timecheck = models.DateTimeField(auto_now_add=True)
    days = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.employee.name