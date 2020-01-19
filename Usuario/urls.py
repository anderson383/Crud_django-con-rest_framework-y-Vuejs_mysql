from django.urls import path
from .api import UsuariosApi, UsuariosUpdate
urlpatterns = [
    
    #api
    path("api/users/all",UsuariosApi.as_view(), name="users_api"),
    path("api/modifi/all/<int:pk>/",UsuariosUpdate.as_view(), name="users_modifi"),
    
]
