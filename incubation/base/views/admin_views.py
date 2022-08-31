from ..models import ApplicationForm, SlotBook
from rest_framework.decorators  import api_view,permission_classes
from ..serializer import ApplicationSerializer,ChangeSlotSerializer,EditApplicationSerializer, EditUserSerializer,SlotSerializer,ChangeApplicationSerializer,UserSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from rest_framework  import status
from django.contrib.auth.models import  User


@api_view(['GET'])
@permission_classes([IsAdminUser])
def show_app(request):
    user=ApplicationForm.objects.filter(status='pending')
    serializer=ApplicationSerializer(user,many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def show_accept(request):
    user=ApplicationForm.objects.filter(status='accept')
    serializer=ApplicationSerializer(user,many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def edit_status(request,id):
    apps=ApplicationForm.objects.get(id=id)
    change=EditApplicationSerializer(instance=apps ,data=request.data)
    if change.is_valid():        
        change.save()
    else:
        print('wtf')
    return Response(change.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def app_delete(request,id):
    apps=ApplicationForm.objects.get(id=id)
    apps.delete()   
    return Response ('succesfully deleted')


@api_view(['GET'])
@permission_classes([IsAdminUser])
def post_details(request,id):
    apps=ApplicationForm.objects.get(id=id)
    serializer=ApplicationSerializer(apps ,many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def app_all_post(request):
    user=ApplicationForm.objects.all()
    serializer=ApplicationSerializer(user,many=True)
    return Response(serializer.data)




@api_view(['GET'])
@permission_classes([IsAdminUser])
def SlotAll(request):
    slot=SlotBook.objects.all()
    serializer=SlotSerializer(slot,many=True)
    return Response(serializer.data)



@api_view(['POST'])
@permission_classes([IsAdminUser])
def slot_status(request,id):
    try:
        slot=SlotBook.objects.get(id=id)
        change=ChangeSlotSerializer(instance=slot, data=request.data)
        if change.is_valid():
            change.save()
        else:
            print('not work')
        return Response(change.data)

    except:
        print('error found')
        message={'detail':'something happen'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
@permission_classes([IsAdminUser])
def Change_app_Status(request,id):
    try:
        slot=ApplicationForm.objects.get(id=id)
        change=ChangeApplicationSerializer(instance=slot, data=request.data)
        if change.is_valid():
            change.save()
        else:
            print('not work')
        return Response(change.data)

    except:
        print('error found')
        message={'detail':'changing error'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)




@api_view(['GET'])
@permission_classes([IsAdminUser])
def AllUser(request):
    user=User.objects.filter(is_superuser=False)
    serializer=UserSerializer(user,many=True)
    return Response(serializer.data)



@api_view(['POST'])
@permission_classes([IsAdminUser])
def BlockUSer(request,id):
    try:
        user=User.objects.get(id=id)
        value=EditUserSerializer(instance=user, data=request.data)
        if value.is_valid():
            value.save()
      
        return Response(value.data)

    except:
        print('error found')
        message={'detail':'changing error in blocking '}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)