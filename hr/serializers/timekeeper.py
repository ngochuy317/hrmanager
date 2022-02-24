from rest_framework import serializers
from hr.models.timekeeper import Timekeeper
from hr.models.employee import Employee
from datetime import datetime

class TimeKeeperSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Timekeeper
        fields = '__all__'
    
    def to_representation(self, instance):
        ret = super(TimeKeeperSerializer, self).to_representation(instance)
        employee_id = ret['employee']
        employee = Employee.objects.filter(id=employee_id).first()
        employee_name = {'employee_name': employee.name} 
        ret.update(employee_name)
        return ret
    