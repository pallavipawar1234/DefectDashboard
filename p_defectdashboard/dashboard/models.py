from django.db import models
from datetime import datetime
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.

class Project_Data(models.Model):
    Project_Name = models.CharField(max_length=50, default = '')
    Project_Type = models.CharField(max_length=50, default = '')
    Team_Size = models.IntegerField()
    Owner_Name = models.CharField(max_length=50, default = '')
    Project_Summary = models.TextField()
    Project_Details = models.TextField()
    Create_Date = models.DateField(blank = True)
