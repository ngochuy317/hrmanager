from rest_framework import serializers
from hr.models.approval import Approval

class ApprovalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Approval
        fields = '__all__'
