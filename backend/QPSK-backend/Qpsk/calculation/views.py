from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q
from celery.result import AsyncResult

from .models import *
from .serializers import *
from .tasks import *

class ProtocolList(ListAPIView):
    queryset = Protocol.objects.all()
    serializer_class = ProtocolModelSerializer

class ProtocolParams(APIView):
    
    def get(self, request):
        protocol = request.query_params.get("protocol", None)
        apart_from = request.query_params.get("apart_from", None)
        if protocol is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        try:
            int(protocol)
        except ValueError:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        param_list = Param.objects.filter(protocol=protocol)
        if apart_from is not None:
            param_list = param_list.filter(~Q(id=apart_from))

        serializer = ParamModelSerializer(param_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class Index(APIView):

    def post(self, request):
        task = randomizer.delay(5)
        data = {'task_id': task.id}
        return Response(data, status=status.HTTP_200_OK)

    def get(self, request, task_id):
        if not task_id:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        job = AsyncResult(task_id)
        data = {'data': job.result or job.state}
        return Response(data, status=status.HTTP_200_OK)
    