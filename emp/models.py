from django.db import models

# Create your models here.
class department(models.Model):
    name=models.CharField(max_length=255,null=True)
    address=models.CharField(max_length=255,null=True)
    query=models.TextField(max_length=255,null=True)

class employee(models.Model):
    empname=models.CharField(max_length=255)
    deptname=models.CharField(max_length=255)
    dateofjoining=models.DateField()
    image=models.CharField(max_length=100)