from django.urls import path  #,include
from emp import views

from django.conf.urls.static import static
from django.conf import settings

app_name='emp'
urlpatterns=[
 path('dep/',views.departmentApi,name="dep"),
 #path('dep/<int:id>',views.departmentApi,name="depedit"),
 path('dep/delete/<int:id>',views.departmentApi,name="depdelete"),
 path('emp/',views.employeeApi,name="emp"),
 #path('dep/<int:id>',views.departmentApi,name="depedit"),
 path('emp/delete/<int:id>',views.employeeApi,name="empdelete"),
 path('saveimagefile/',views.saveimagefile,name='saveimagefile')
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
