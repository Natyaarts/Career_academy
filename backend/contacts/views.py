from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import ContactRequest, FacultyMember, Affiliation
from .serializers import ContactRequestSerializer, FacultyMemberSerializer, AffiliationSerializer

class ContactRequestViewSet(viewsets.ModelViewSet):
    queryset = ContactRequest.objects.all().order_by('-created_at')
    serializer_class = ContactRequestSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FacultyMemberViewSet(viewsets.ModelViewSet):
    queryset = FacultyMember.objects.all()
    serializer_class = FacultyMemberSerializer

class AffiliationViewSet(viewsets.ModelViewSet):
    queryset = Affiliation.objects.all()
    serializer_class = AffiliationSerializer
