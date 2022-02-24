from django.db import models
from hr.models.department import Department
from hr.models.wage_rate import WageRate
# from accounts.models.user import User
from accounts.models import User
class Employee(models.Model):
    name = models.CharField(max_length=100)
    owner = models.OneToOneField(User, related_name="employees", on_delete=models.CASCADE,null=True, blank=True)
    email = models.EmailField(max_length=100, unique=True,null=True, blank=True)
    phone = models.CharField(max_length=15, unique=True,null=True, blank=True)
    birthday = models.DateField()
    status = models.BooleanField(default = True)

    GENDER_CHOICE = [('male', 'Male'),('female', 'Female'),('other', 'Other')]
    gander = models.CharField(max_length=6, choices=GENDER_CHOICE, default='male')

    MARITAL_CHOICE = [('single', 'Single'),('married', 'Married'),('cohabitant', 'Legal Cohabitant'),
                      ('widower', 'Widower'),('divorced', 'Divorced')]
    marital = models.CharField(max_length=15, choices=MARITAL_CHOICE, default='single')
    
    joindate = models.DateField(null=True, blank=True)
    EMPLOYEE_TYPE_CHOICE = [('employee', 'Employee'),('student', 'Student'),
                            ('intern', 'Intern'),('freelancer', 'Freelancer') ]
    employee_type = models.CharField(max_length=20, choices=EMPLOYEE_TYPE_CHOICE, default='employee')

    parent = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE)
    department = models.ForeignKey(Department,null=True, blank=True,on_delete = models.CASCADE)
    wage_rate = models.ForeignKey(WageRate,on_delete = models.CASCADE, null=True, blank=True)

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)



class ManagerDepartments(models.Model):
    employee = models.ForeignKey(Employee, on_delete = models.CASCADE)
    department = models.OneToOneField(Department, on_delete = models.CASCADE)

    def __str__(self):
        return self.employee.name
