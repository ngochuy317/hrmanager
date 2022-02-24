from rest_framework import serializers
from hr.models.employee import Employee
from hr.models.department import Department

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'
    
    def to_representation(self, instance):
        ret = super(EmployeeSerializer, self).to_representation(instance)
        department = Department.objects.filter(id=ret['department']).first()
        employee = Employee.objects.filter(id=ret['parent']).first()
        department_name = {'department_name': ''}
        manager_name = {'manager_name': ''}
        if(department): 
            department_name = {'department_name': department.name} 
        ret.update(department_name)
        if(employee): 
            manager_name = {'manager_name': employee.name}  
        ret.update(manager_name)

        return ret