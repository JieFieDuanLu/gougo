# encoding: utf-8

from gou.models import ItemInt, Item
from django import template
from django.template.defaultfilters import stringfilter

register = template.Library()


@register.filter
@stringfilter
def count(itemId):
    item = Item.objects.get(pk=itemId)
    return ItemInt.objects.filter(item=item).count()
