from django.contrib.postgres.fields import ArrayField
from django.db import models


class StackIcon(models.Model):
    icon_set_prefix = models.CharField(max_length=100)
    icon_name = models.CharField(max_length=100)
    text = models.CharField(max_length=100)
    icon = models.CharField(max_length=100)

    def __str__(self):
        return self.text


class Experience(models.Model):
    type = models.CharField(max_length=100)
    date = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=100)
    tags = ArrayField(models.CharField(max_length=100), blank=True)

    def __str__(self):
        return self.title
