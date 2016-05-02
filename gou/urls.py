# coding: utf-8
from django.conf.urls import url
from gou.views import Home, ItemList, OrderList, ProfileDetail

urlpatterns = [
    url(r'^$', Home.as_view(), name='home'),
    url(r'^items/$', ItemList.as_view(), name='items'),
    url(r'^cart/$', OrderList.as_view(), name='cart'),
    url(r'^me/$', ProfileDetail.as_view(), name='me'),
]
