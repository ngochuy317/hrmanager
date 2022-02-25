from rest_framework import serializers
from hr.models.wage_rate import WageRate

class WageRateSerializer(serializers.ModelSerializer):
    class Meta:
        model = WageRate
        fields = '__all__'
    