# coding: utf-8

from rest_framework import generics
from gou.models import Item, Cart
from api.serializers.item import ItemSerializer
from rest_framework import status
from rest_framework.response import Response


class CartView(generics.ListCreateAPIView):
    serializer_class = ItemSerializer
    # permission_classes = (IsAdminUser,)
    paginate_by = 10

    def get_queryset(self):
        if self.request.user.is_authenticated():
            user = self.request.user
            return Item.objects.filter(carts__user=user)
        return []

    def create(self, request, *args, **kwargs):
        item = Item.objects.get(pk=request.data.get('item'))
        if Cart.objects.filter(user=request.user, item=item).count():
            return Response(
                {'msg': u'失败'},
                status=status.HTTP_302_FOUND,
                headers={}
            )
        cart = Cart(user=request.user, item=item)
        cart.save()
        data = {
            'id': item.id,
            'name': item.name,
            'description': item.description
        }
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data,
            status=status.HTTP_201_CREATED,
            headers=headers
        )
