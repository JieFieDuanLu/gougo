# coding: utf-8

from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.views.generic import ListView
from gou.models import ItemInt


class ItemIntList(ListView):
    template_name = 'order.html'
    model = ItemInt
    context_object_name = 'ints'

    def get_context_data(self, **kwargs):
        context = super(ItemIntList, self).get_context_data(**kwargs)
        return context

    @method_decorator(login_required)
    def dispatch(self, *args, **kwargs):
        return super(ItemIntList, self).dispatch(*args, **kwargs)
