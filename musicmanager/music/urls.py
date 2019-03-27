from rest_framework import routers
from .api import AlbumViewSet, SongViewSet, ArtistViewSet

router = routers.DefaultRouter()
router.register('api/albums', AlbumViewSet, 'albums')
router.register('api/songs', SongViewSet, 'songs')
router.register('api/artists', ArtistViewSet, 'artists')

urlpatterns = router.urls