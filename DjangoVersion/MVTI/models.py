from django.db import models

# Create your models here.

class MVTI(models.Model):

    def __str__(self):
        return self.content