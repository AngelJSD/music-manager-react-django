from rest_framework import serializers
from music.models import Album

# Album serializer
class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = '__all__'