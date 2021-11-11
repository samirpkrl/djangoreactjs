from rest_framework import routers, serializers
from emp.models import department,employee

class departmentserializer(serializers.ModelSerializer):
    class Meta:
        model=department
        fields=('id','name','address','query')
        

class employeeserializer(serializers.ModelSerializer):
    class Meta:
        model=employee
        fields=('empname','deptname','dateofjoining','image')