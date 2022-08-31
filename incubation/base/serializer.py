
                                          
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import ApplicationForm, SlotBook
from base import models

class UserSerializer(serializers.ModelSerializer):
    name=serializers.SerializerMethodField(read_only=True)
    _id=serializers.SerializerMethodField(read_only=True)
    isAdmin=serializers.SerializerMethodField(read_only=True)
    class Meta:
        model=User
        fields=['id','_id','username','email','name','isAdmin']

    def get_name(self, obj):
        name=obj.first_name
        if name=='':
            name=obj.email
        return name
    def get__id(self ,obj):
        return obj.id

    def get_isAdmin(self ,obj):
        return obj.is_staff

class UserSerializerWithToken(UserSerializer):
    token=serializers.SerializerMethodField(read_only=True)
    class Meta:
        model=User
        fields=['id','_id','username','email','name','isAdmin','token',]

    def get_token(self ,obj):
        token=RefreshToken.for_user(obj)
        return str(token.access_token)

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model=ApplicationForm
        fields='__all__'




class EditApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model=ApplicationForm
        fields=['status']


class SlotSerializer(serializers.ModelSerializer):
    class Meta:
        model=SlotBook
        fields='__all__'



class ChangeSlotSerializer(serializers.ModelSerializer):
    class Meta:
        model=SlotBook
        fields=['active','application']

class ChangeApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model=ApplicationForm
        fields=['slot']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields='__all__'


class EditUserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['is_active']