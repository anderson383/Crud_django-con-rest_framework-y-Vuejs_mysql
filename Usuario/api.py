from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import AdsiUsuario
from .serializers import UsuarioSerializer


class UsuariosApi(ListCreateAPIView):
    queryset = AdsiUsuario.objects.all()
    serializer_class = UsuarioSerializer
    
class UsuariosUpdate(RetrieveUpdateDestroyAPIView):
    queryset = AdsiUsuario.objects.all()
    serializer_class = UsuarioSerializer