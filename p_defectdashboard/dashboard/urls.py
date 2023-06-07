from django.urls import path
from . import views

urlpatterns = [
    path("fun",views.fun,name="fun"),
    path("Create_Project",views.Create_Project.as_view(),name="Create_Project")
]
