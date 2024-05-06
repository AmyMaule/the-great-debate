from django.db import models

class Question(models.Model):
    question_text = models.CharField(max_length=200)

    def __str__(self):
        return self.question_text


class Answer(models.Model):
    answer_text = models.CharField(max_length=150)
    question = models.ForeignKey(Question, related_name='answers', on_delete=models.CASCADE)
    votes = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.answer_text
