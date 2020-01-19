from django import forms
from .models import AdsiUsuario

#
class UsuarioForm(forms.ModelForm):
    class Meta:
        model = AdsiUsuario
        exclude = []