from django.contrib import admin
from .models import ContactRequest, FacultyMember, Affiliation

@admin.register(ContactRequest)
class ContactRequestAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'created_at')
    search_fields = ('first_name', 'last_name', 'email')
    list_filter = ('created_at',)

@admin.register(FacultyMember)
class FacultyMemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'specialty', 'years_experience', 'order')
    search_fields = ('name', 'role', 'specialty')
    list_editable = ('order',)

@admin.register(Affiliation)
class AffiliationAdmin(admin.ModelAdmin):
    list_display = ('title', 'subtitle', 'order')
    search_fields = ('title', 'subtitle')
    list_editable = ('order',)
