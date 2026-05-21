from django.contrib import admin
from .models import BlogPost

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author_name', 'published_date', 'created_at')
    search_fields = ('title', 'content', 'author_name')
    prepopulated_fields = {'slug': ('title',)}
    list_filter = ('published_date', 'author_name')
