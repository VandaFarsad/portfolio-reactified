from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView

from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularSwaggerView,
)

django_urls = [
    "admin",
    "api",
]
# Match any URL that doesn't start with one of the above
react_urls = r"^(?!" + "|".join(django_urls) + r")"

urlpatterns = [
    path("admin/", admin.site.urls),
    re_path(react_urls, TemplateView.as_view(template_name="index.html")),
    path("api/", include("api.urls")),
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path("api/schema/swagger-ui/", SpectacularSwaggerView.as_view(url_name="schema"), name="swagger-ui"),
]
