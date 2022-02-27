from django.db.models.signals import m2m_changed, post_save, pre_save
from django.dispatch import receiver

from .models import Salary, Employee


@receiver(post_save, sender=Salary)
def salary_save(sender, instance, created, **kwargs):
    if created:
        employee = Employee.objects.filter(name=instance.employee).first()
        if employee.wage_rate:
            allowance = employee.wage_rate.allowance
            instance.overall_wage = (instance.basic_wage + allowance) * instance.work_days / 24
            instance.save()
