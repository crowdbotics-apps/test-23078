from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ChoiceViewSet, QuestionViewSet, StepViewSet

router = DefaultRouter()
router.register("question", QuestionViewSet)
router.register("choice", ChoiceViewSet)
router.register("step", StepViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
