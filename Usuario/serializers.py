from .models import AdsiUsuario
from rest_framework import serializers

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdsiUsuario
        fields = "__all__"
        
