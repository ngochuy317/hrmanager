from django.db import models
from hr.models.employee import Employee

class Salary(models.Model):
    employee = models.ForeignKey(Employee,on_delete = models.CASCADE)
    wage_rate = models.IntegerField()
    basic_wage = models.IntegerField()
    year = models.IntegerField()
    month = models.IntegerField()
    work_days = models.FloatField(default=0)
    overall_wage = models.IntegerField()

    def __str__(self):
        return self.employee.name


    # tong = (basic_wage + allowance)x ngay cong / so ngay cong ty quy dinh