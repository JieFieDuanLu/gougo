# coding: utf-8

from django.views.generic import ListView
from gou.models import Item


class Home(ListView):
    template_name = 'home.html'
    model = Item
    context_object_name = 'items'

    def get_context_data(self, **kwargs):
        context = super(Home, self).get_context_data(**kwargs)
        context['populated'] = Item.objects.all()[:4]
        context['shared'] = Item.objects.all()[:4]
        return context
