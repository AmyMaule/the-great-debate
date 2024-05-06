import logging

from rest_framework import serializers

from .models import *

log_format = "%(levelname)s %(asctime)s: %(message)s"
logging.basicConfig(
    format = log_format, level = logging.DEBUG
)
logger = logging.getLogger()
logger.propagate = True


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = "__all__"


class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ('answers', 'id', 'question_text')

