# coding: utf-8
from django.conf.urls import url
from gou.views import Home

urlpatterns = [
    url(r'^$', Home.as_view(), name='home'),
]
