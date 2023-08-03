from django.contrib import admin
from .models import Article,Category
from comment.models import Comment
# 注册ArticlePost到admin中
admin.site.register(Article)
admin.site.register(Category)
admin.site.register(Comment)
