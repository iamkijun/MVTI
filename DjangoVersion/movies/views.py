import random
from django.http import JsonResponse
from .models import Movie, MovieComment
from django.contrib.auth import get_user_model
from .forms import MovieCommentForm, PostSearchForm
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.http import require_http_methods, require_POST, require_safe
from django.views.generic.edit import FormView


#검색
from django.views.generic import FormView
# forms.py에서 정의한 폼 태그 요소
from movies.forms import PostSearchForm
from django.db.models import Q # 검색 기능
from django.shortcuts import render # 단축 함수



# Create your views here.

@require_safe
def index(request):
    user = request.user
    User = get_user_model()
    person = get_object_or_404(User, pk=user.pk)
    movie_like = person.like_movies.all()
    movies = Movie.objects.all()

    a = list(movies)
    b = list(movie_like)
    c = list(set(a)-set(b))
    random.shuffle(c)

    context = {
        'movie_like':movie_like,
        'person':person,
        'movies':movies,
        'c':c,
    }

    return render(request, 'movies/index.html', context)


@require_safe
def detail(request, movie_pk):
    movies = Movie.objects.all()
    # movie = Movie.objects.get(pk=pk)
    movie = get_object_or_404(Movie, pk=movie_pk)
    comment_form = MovieCommentForm()
    comments = movie.moviecomment_set.all()
    context = {
        'movies': movies,
        'movie': movie,
        'url':"https://image.tmdb.org/t/p/w780"+movie.poster_path,
        'comment_form': comment_form,
        'comments' : comments,        
    }
    return render(request, 'movies/detail.html', context)


@require_POST
def comments_create(request, pk):
    if request.user.is_authenticated:
        movie = get_object_or_404(Movie, pk=pk)
        comment_form = MovieCommentForm(request.POST)
        if comment_form.is_valid():
            comment = comment_form.save(commit=False)
            comment.movie = movie
            comment.user = request.user
            comment.save()
        return redirect('movies:detail', movie.pk)
    return redirect('accounts:login')


def comments_delete(request, movie_pk, comment_pk):
    if request.user.is_authenticated:
        comment = get_object_or_404(MovieComment, pk=comment_pk)
        if request.user == comment.user:
            comment.delete()
    return redirect('movies:detail', movie_pk)


@require_POST
def likes(request, movie_pk):
    if request.user.is_authenticated:
        movie = Movie.objects.get(pk=movie_pk)

        if movie.like_users.filter(pk=request.user.pk).exists():
            movie.like_users.remove(request.user)
            is_liked = False
        else:
            movie.like_users.add(request.user)
            is_liked = True
        context = {
            'is_liked': is_liked,
            'likeusers_count': movie.like_users.count(),
        }
        return JsonResponse(context)
    return redirect('accounts:login')

class SearchFormView(FormView):
    form_class = PostSearchForm
    template_name = 'movies/search.html'

    def form_valid(self, form):
        searchWord = form.cleaned_data['search_word']
        movie_list = Movie.objects.filter(Q(title__icontains=searchWord))
        
        context = {}
        context['form'] = form
        context['search_term'] = searchWord
        context['object_list'] = movie_list

        return render(self.request, self.template_name, context)