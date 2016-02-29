# coding: utf-8

from rest_framework import serializers
from gou.models import Item


class ItemSerializer(serializers.ModelSerializer):
    img_url = serializers.SerializerMethodField()

    class Meta:
        model = Item
        depth = 1
        fields = ['id', 'name', 'description', 'price', 'created', 'img_url']

    def get_img_url(self, obj):
        return obj.image.url
