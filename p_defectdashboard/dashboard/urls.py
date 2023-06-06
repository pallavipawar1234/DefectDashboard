from django.urls import path
from . import views

urlpatterns = [
    path("fun",views.fun,name="fun"),
    path("Create_Issue",views.Create_Issue.as_view(),name="Create_Issue")
]
