from rest_framework import serializers
from hr.models.salary import Salary

class SalarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Salary
        fields = '__all__'
    