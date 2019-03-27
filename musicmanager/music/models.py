from django.db import models
from django.conf import settings

class Album(models.Model):
    title = models.CharField(max_length=100)
    artist = models.CharField(max_length=100)
    published_at = models.DateTimeField()
    image = models.ImageField(upload_to='images')
    created_at = models.DateTimeField(auto_now_add=True)

class Song(models.Model):
    title = models.CharField(max_length=100)
    album = models.CharField(max_length=100)
    duration = models.TimeField()
    created_at = models.DateTimeField(auto_now_add=True)

class Artist(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
