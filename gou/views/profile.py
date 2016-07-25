# coding: utf-8

from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.views.generic import UpdateView
from gou.models import Profile


class ProfileDetail(UpdateView):
    template_name = 'profile.html'
    model = Profile
    context_object_name = 'profile'
    fields = ['nickname', 'gender', 'phone', 'qq', 'weixin', 'address']

    def get_object(self, queryset=None):
        try:
            return self.request.user.profile
        except:
            return None

    def get_success_url(self):
        return '/me/'

    def get_context_data(self, **kwargs):
        context = super(ProfileDetail, self).get_context_data(**kwargs)
        return context

    @method_decorator(login_required)
    def dispatch(self, *args, **kwargs):
        return super(ProfileDetail, self).dispatch(*args, **kwargs)
