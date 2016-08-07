from django.contrib import admin

from gou.models import Item, Order, ItemInt, Profile


class ItemAdmin(admin.ModelAdmin):
    pass


class ItemIntAdmin(admin.ModelAdmin):
    pass


class OrderAdmin(admin.ModelAdmin):
    pass


class ProfileAdmin(admin.ModelAdmin):
    pass

admin.site.register(Item, ItemAdmin)
admin.site.register(ItemInt, ItemIntAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(Profile, ProfileAdmin)
