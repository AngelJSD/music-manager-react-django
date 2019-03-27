from rest_framework import routers
from .api import AlbumViewSet, SongViewSet

router = routers.DefaultRouter()
router.register('api/albums', AlbumViewSet, 'albums')
router.register('api/songs', SongViewSet, 'songs')

urlpatterns = router.urls