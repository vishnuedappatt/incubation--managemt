from base.views import admin_views as views
from django.urls import path

urlpatterns=[
    path('app/',views.show_app,name='show_app'),
    path('allapps/',views.app_all_post,name="show_all"),
    path('apps/',views.show_accept,name='show_acccept'),
    path('app/del/<int:id>/',views.app_delete,name="delete_app"),
    path('app/<int:id>/',views.edit_status,name='edit_status'),
    path('apps/<int:id>/',views.post_details,name='post-details'),\
    path('slots/',views.SlotAll,name='slot_all'),
    path('slots/<int:id>/',views.slot_status,name="slots_status"),
    path('slot/<int:id>/',views.Change_app_Status,name="change_App_Status"),
    path('users/',views.AllUser,name="alluser"),
    path('users/<int:id>/',views.BlockUSer,name="blockuser"),
]
