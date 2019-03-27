from music.models import Album
from rest_framework import viewsets, permissions
from .serializers import AlbumSerializer
from django.http import HttpResponseRedirect

# Album viewset
class AlbumViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AlbumSerializer

    #def create(self, request, *args, **kwargs):
        #response = super(AlbumViewSet, self).create(request, *args, **kwargs)
        # here may be placed additional operations for
        # extracting id of the object and using reverse()
    #    return HttpResponseRedirect(redirect_to='/')

    #def perform_create(self, serializer):
    #    serializer.partial = True
    #    serializer.save()