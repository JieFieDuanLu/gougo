# coding: utf-8

from rest_framework import viewsets
from gou.models import Item
from api.serializers.item import ItemSerializer


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    paginate_by = 12

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)
