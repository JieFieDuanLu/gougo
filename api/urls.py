# coding: utf-8

from django.conf.urls import include, url
from rest_framework import routers
from api.views.item import ItemViewSet
from api.views.cart import CartView

router = routers.DefaultRouter()
router.register(r'items', ItemViewSet, base_name='item')

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^cart/$', CartView.as_view(), name='cart'),
]
