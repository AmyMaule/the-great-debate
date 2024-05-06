import logging

from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response

from .models import *
from .serializers import QuestionSerializer


log_format = "%(levelname)s %(asctime)s: %(message)s"
logging.basicConfig(
    format = log_format, level = logging.DEBUG
)
logger = logging.getLogger()
logger.propagate = True


class QuestionsView(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def list(self, request, *args, **kwargs):
        queryset = Question.objects.all()
        serializer = QuestionSerializer(queryset, many=True)

        return Response(serializer.data)
    

class QuestionView(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def partial_update(self, request, pk, *args, **kwargs):
        """
        This method increases the vote count for an answer by 1
        :return: None
        """
        try:
            answer = Answer.objects.get(pk=request.data['answerID'])
            answer.votes += 1
            answer.save()
        except Exception as e:
            logger.error(e)
        
        return super().partial_update(request, *args, **kwargs)
