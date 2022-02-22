from django.db import models
from hr.models.employee import Employee

class Approval(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    employee = models.ForeignKey(Employee,on_delete = models.CASCADE)

    STATUS_CHOICE = [('new', 'New'),('approve', 'Approve'),
                            ('cancel', 'Cancel')]
    status = models.CharField(max_length=20, choices=STATUS_CHOICE, default='new')
    # approver_id = models.ForeignKey(Employee,on_delete = models.CASCADE)

    def __str__(self):
        return self.title