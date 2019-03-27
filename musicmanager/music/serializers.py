from rest_framework import serializers
from music.models import Album, Song, Artist

# Album serializer
class AlbumSerializer(serializers.ModelSerializer):
    #published_at = serializers.DateTimeField(format="%Y-%m-%d")
    class Meta:
        model = Album
        fields = '__all__'

# Song serializer
class SongSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Song
        fields = '__all__'

# Artist serializer
class ArtistSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Artist
        fields = '__all__'