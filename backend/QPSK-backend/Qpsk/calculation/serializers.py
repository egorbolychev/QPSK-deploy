from rest_framework import serializers
from .models import *

class ProtocolModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Protocol
        fields = "__all__"


class ParamModelSerializer(serializers.ModelSerializer):
    value = serializers.FloatField(source='default_value')
    
    class Meta:
        model = Param
        fields = ("id", "name", "variable", "description", "lower_bound", "upper_bound", "protocol", "value")
