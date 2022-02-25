from rest_framework import serializers
from hr.models.correct_access import CorrectAccess

class CorrectAccessSerializer(serializers.ModelSerializer):
    class Meta:
        model = CorrectAccess
        fields = '__all__'
    