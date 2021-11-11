from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from emp.models import department,employee
from emp.serializer import departmentserializer,employeeserializer
from django.http.response import JsonResponse
from django.core.files.storage import default_storage

@csrf_exempt
def departmentApi(request,id=0):
    if request.method=='GET':
        dep=department.objects.all() #filter(id=3)
        #print('Reached GET')
        dep_serializer=departmentserializer(dep,many=True)
        return JsonResponse(dep_serializer.data,safe=False)
    elif request.method=='POST':
        dep_data=JSONParser().parse(request)
        print('Reached POST')
        dep_serializer=departmentserializer(data=dep_data)
        if dep_serializer.is_valid():
            dep_serializer.save()
            return JsonResponse('Added Successfully',safe=False)
        return JsonResponse('Failed to add',safe=False)
    
    elif request.method=='PUT':
        dep_data=JSONParser().parse(request)
        #print(dep_data)
        dep=department.objects.get(id=dep_data['id'])
        dep_serializer=departmentserializer(dep,data=dep_data)
        if dep_serializer.is_valid():
            dep_serializer.save()
            return JsonResponse('Edited successfully',safe=False)
        return JsonResponse('Failed to add',safe=False)
        
    elif request.method=='DELETE':
        print("Hi object deleted")
        dep=department.objects.get(id=id)
        print(id)
        dep.delete()
        return JsonResponse('Deleted successfully',safe=False)
        
@csrf_exempt
def employeeApi(request,id=0):
    if request.method=='GET':
        emp=employee.objects.all()
        emp_serializer=employeeserializer(emp,many=True)
        return JsonResponse(emp_serializer.data,safe=False)
    elif request.method=='POST':
        emp_data=JSONParser().parse(request)
        emp_serializer=employeeserializer(data=emp_data)
        #print(emp_serializer)
        if emp_serializer.is_valid():
            emp_serializer.save()
            return JsonResponse('Added Successfully',safe=False)
        return JsonResponse('Failed to add',safe=False)
    
    elif request.method=='PUT':
        emp_data=JSONParser().parse(request)
        #print(dep_data)
        emp=employee.objects.get(id=emp_data['id'])
        emp_serializer=employeeserializer(emp,data=emp_data)
        if emp_serializer.is_valid():
            emp_serializer.save()
            return JsonResponse('Edited successfully',safe=False)
        return JsonResponse('Failed to add',safe=False)
        
    elif request.method=='DELETE':
        emp=employee.objects.get(id=id)
        emp.delete()
        return JsonResponse('Deleted successfully',safe=False)
        
        
        
@csrf_exempt
def saveimagefile(request):
    file=request.FILES['myfile']
    file_name = default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)