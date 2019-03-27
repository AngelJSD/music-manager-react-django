from rest_framework import serializers
from music.models import Album

# Album serializer
class AlbumSerializer(serializers.ModelSerializer):
    published_at = serializers.DateTimeField(format="%Y-%m-%d")
    class Meta:
        model = Album
        fields = '__all__'