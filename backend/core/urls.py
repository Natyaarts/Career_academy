from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from contacts.views import ContactRequestViewSet, FacultyMemberViewSet, AffiliationViewSet

router = DefaultRouter()
router.register(r'contact-requests', ContactRequestViewSet, basename='contact-request')
router.register(r'faculty', FacultyMemberViewSet, basename='faculty')
router.register(r'affiliations', AffiliationViewSet, basename='affiliation')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
