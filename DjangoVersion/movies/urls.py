from django.urls import path
from . import views

app_name = 'movies'
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:movie_pk>/', views.detail, name='detail'),
    path('<int:pk>/comments/', views.comments_create, name='comments_create'),
    path('<int:movie_pk>/comments/<int:comment_pk>/delete', views.comments_delete , name='comments_delete'),
    path('<int:movie_pk>/likes/', views.likes, name='likes'),
    # path('search/',views.SearchFormView.as_view(), name='search')
    path('search/', views.SearchFormView.as_view(), name='search'),
]