from django.urls import path
from .views import RegisterView, LoginView,  UserView, LogoutView

urlpatterns = [
    # path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register_user'),
    path('token/', LoginView.as_view(), name='login_user'),
    path('user/',  UserView.as_view(), name='view_user'),
    path('logout/', LogoutView.as_view(), name='logout_user')
]