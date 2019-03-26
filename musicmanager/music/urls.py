from rest_framework import routers
from .api import AlbumViewSet

router = routers.DefaultRouter()
router.register('api/albums', AlbumViewSet, 'albums')

urlpatterns = router.urls