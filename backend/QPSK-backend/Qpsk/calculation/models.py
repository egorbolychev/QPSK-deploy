from django.db import models

# Create your models here.

class Protocol(models.Model):
    name = models.CharField(unique=True)
    description = models.TextField(blank=True, null=True)

class Param(models.Model):
    name = models.CharField()
    variable = models.CharField(max_length=30)
    description = models.TextField(blank=True, null=True)
    default_value = models.FloatField()
    lower_bound = models.FloatField()
    upper_bound = models.FloatField()
    protocol = models.ForeignKey(Protocol, on_delete=models.CASCADE, related_name="params")


class ResultType(models.Model):
    name = models.CharField(max_length=255)

class Result(models.Model):
    name = models.CharField(max_length=500)
    result = models.JSONField()
    protocol = models.ForeignKey(Protocol, on_delete=models.CASCADE, related_name="results")
    type = models.ForeignKey(ResultType, on_delete=models.CASCADE)

class ResultParam(models.Model):
    value = models.FloatField()
    param = models.ForeignKey(Param, on_delete=models.CASCADE)
    result = models.ForeignKey(Result, on_delete=models.CASCADE, related_name="params")