from base.views import user_views as views
from django.urls import path

urlpatterns = [
    path('login/',views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/',views.UserProfile,name='user_profile'),
    path('register/',views.register,name='user_create'),
    path('application/',views.application,name='application'),  
    path('',views.Show_user,name='Show-user'),
    path('appstatus/<str:email>/',views.Show_app_status,name="showappstatus"),
    path('userslot/<str:email>/',views.SlotUser,name="userslot"),
]
    

    