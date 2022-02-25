from django.db import models
from hr.models.employee import Employee

class Approval(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    employee = models.ForeignKey(Employee,on_delete = models.CASCADE, related_name='employeeapproval')

    STATUS_CHOICE = [('new', 'New'),('approve', 'Approve'),
                            ('cancel', 'Cancel')]
    status = models.CharField(max_length=20, choices=STATUS_CHOICE, default='new')
    date = models.DateField(null=True, blank=True)
    approver_id = models.ForeignKey(Employee,on_delete = models.CASCADE, related_name='approver_id', blank=True, null=True)

    def __str__(self):
        return self.title