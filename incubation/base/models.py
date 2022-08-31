
from django.db import models
from django.contrib.auth.models import User 
# Create your models here.

class ApplicationForm(models.Model):
    STATUS={
        ('pending','pending'),
        ('rejected','rejected'),
        ('accept','accept'),
        ('approved','approved'),
    }    
    name=models.CharField(max_length=50)
    address=models.CharField(max_length=100)
    city=models.CharField(max_length=50)
    state=models.CharField(max_length=50)
    email=models.CharField(max_length=50,unique=True)
    mobile=models.CharField(max_length=30)
    company_name=models.CharField(max_length=50)
    team_description=models.TextField(max_length=200)
    product_description=models.TextField(max_length=200)
    problem_description=models.TextField(max_length=200)
    create_at=models.DateTimeField(auto_now_add=True)
    status=models.CharField(default= 'pending',max_length=10, choices=STATUS)
    slot=models.BooleanField(default=False)    
   


    def __str__(self):
        return self.company_name


class SlotBook(models.Model):
    application=models.ForeignKey(ApplicationForm,on_delete=models.CASCADE,null=True,blank=True)   
    Date=models.CharField(max_length=50)
    time=models.CharField(max_length=40)
    number=models.CharField(max_length=30)
    active=models.BooleanField(default=False)

    def __str__(self):
        return self.number
    