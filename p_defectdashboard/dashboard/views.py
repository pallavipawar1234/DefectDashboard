from django.shortcuts import render
from django.http import HttpResponse
from dashboard import models
from dashboard.models import Project_Data
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import io
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
from .serializers import Project_DataSerializer
import pdb
# Create your views here.

def fun(request):
    
    return

class Create_Issue(APIView):
    def get(self,request):

        return Response({"data":"data"},status=status.HTTP_200_OK)
    def post(self,request):
        # models
        pdb.set_trace()
        # requestedData = request.data
        # queryset = models.Project_Data.objects.filter(Project_Name = request.data['Project_Name'])
        # if not queryset.exists():
        json_data = request.body
        stream = io.BytesIO(json_data)
        pythondata = JSONParser().parse(stream)
        serializer = Project_DataSerializer(data = pythondata)
        if serializer.is_valid():
            # serializer.save()
            res = {"msg":"data created"}
            json_data = JSONRenderer().render(res)
            return Response(json_data, content_type = 'application/json')
        json_data = JSONRenderer().render(serializer.errors)
        return Response(json_data, content_type = 'application/json')
        
        # return Response({"data":"data"},status=status.HTTP_200_OK)
        

