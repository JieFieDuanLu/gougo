# coding: utf-8

from django.views.generic import ListView
from gou.models import Item


class ItemList(ListView):
    template_name = 'items.html'
    model = Item
    context_object_name = 'items'

    def get_context_data(self, **kwargs):
        context = super(ItemList, self).get_context_data(**kwargs)
        context['finishing'] = Item.objects.all()[:4]
        return context
