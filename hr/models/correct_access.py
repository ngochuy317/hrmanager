from django.db import models
from hr.models.employee import Employee

class CorrectAccess(models.Model):
    employee = models.ForeignKey(Employee,on_delete = models.CASCADE)
    today = models.DateField()
    time_in_days = models.DateField(null=True, blank=True)
    time_in_days = models.DateField(null=True, blank=True)
    work_days = models.FloatField(default=0)
    send_email = models.BooleanField(default= False)
   
    def __str__(self):
        return self.employee.name