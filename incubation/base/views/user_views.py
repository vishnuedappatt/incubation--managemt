
from django.shortcuts import render
from base.models import ApplicationForm, SlotBook
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from ..serializer import SlotSerializer, UserSerializer,UserSerializerWithToken,ApplicationSerializer
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework  import status


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def UserProfile(request):
    user=request.user
    serializer=UserSerializer(user,many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def  Show_user(request):
    user=User.objects.all()
    serializer=UserSerializer(user,many=True)
    return Response(serializer.data)


@api_view(['POST'])
def register(request):
    try:
        data=request.data
        user=User.objects.create(
            username=data['username'],
            first_name=data['name'],
            email=data['email'],
            password=make_password(data['password']),
        )
        serializer=UserSerializerWithToken(user ,many=False)
        return Response(serializer.data)
    except:
        message={'detail':'user with this email already exists'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)     
        serializer=UserSerializerWithToken(self.user).data
        for k ,v in serializer.items():
            data[k]=v
        return data
 

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def application(request):
    print('data is',request.data)
    try:
        data=request.data
        application=ApplicationForm.objects.create(

            name=data['name'],
            address=data['address'],
            city=data['city'],
            state=data['state'],
            mobile=data['mobile'],            
            email=data['email'],
            company_name=data['company_name'],
            team_description=data['team_description'],
            product_description=data['product_description'],
            problem_description=data['problem_description'],            
          
            

        )
        serializer=ApplicationSerializer(application ,many=False)
        return Response(serializer.data)
    except:
        message={'detail':'application form contain mistake '}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def Show_app_status(request,email):
    application=ApplicationForm.objects.get(email=email)
    serializer=ApplicationSerializer(application,many=False)
    return Response(serializer.data)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def SlotUser(request,email):
    app=ApplicationForm.objects.get(email=email)
    slot=SlotBook.objects.get(application=app)
    serializer=SlotSerializer(slot,many=False)
    return Response(serializer.data)

