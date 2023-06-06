from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Project_Data

class Project_DataSerializer(serializers.ModelSerializer):
    Project_Name = serializers.CharField(read_only=True)
    class Meta:
        model = Project_Data    
        fields = ['id','Project_Name','Project_Type','Team_Size','Owner_Name' ,'Project_Summary','Project_Details','Create_Date']