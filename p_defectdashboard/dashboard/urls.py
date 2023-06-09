from django.urls import path
from . import views

urlpatterns = [
    path("fun",views.fun,name="fun"),
    path("Create_Project",views.Create_Project.as_view(),name="Create_Project"),
    path("Review_Project",views.Review_Project.as_view(),name="Review_Project"),
    path("Registaration_Api",views.Registaration_Api.as_view(),name="Registaration_Api")
]
