from tokenize import blank_re
from django.db import models
from django.conf import settings

# Create your models here.

def models_image_path(instance, filename):
        return f'image/{instance.user.username}/{filename}'

# 각각 유형에 맞는 필드 타입 설정, null=True 입력하지 않아도 저장 가능하도록 하기
# models.py 수정/추가 시 migrate 해주기

class Genre(models.Model):
    name = models.CharField(max_length=50)

class Movie(models.Model):
    title = models.CharField(max_length=50)
    # original_title = models.CharField(max_length=100)
    release_date = models.DateField()
    popularity = models.FloatField()
    vote_count = models.IntegerField()
    vote_average = models.FloatField()
    overview = models.TextField()
    poster_path = models.CharField(max_length=300)
    genres = models.ManyToManyField(Genre)
    like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_movies')
    # user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    # score = models.FloatField(null=True)
    # image = models.ImageField(blank=True)
    # image = models.ImageField(blank=True, upload_to='%Y/%m/%d/')
    # image = models.ImageField(blank=True, upload_to=models_image_path)
    image = models.ImageField(blank=True, upload_to='images/')

    def __str__(self):
        return self.title


class MovieComment(models.Model):
    rank_choices = ((5, '★★★★★'),(4, '★★★★'),(3, '★★★'),(2, '★★'),(1, '★'))
    rank = models.IntegerField(choices=rank_choices)
    content = models.TextField()
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)  # ForeignKey
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='movie_comments')
    # created_at = models.DateTimeField(auto_now_add=True)
    # updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.content