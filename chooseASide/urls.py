from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.home, name="all_topics"),
    url(r"^s/(?P<pk>[\d]+)/", views.increment_score, name="score"),
    url(r"^(?P<topic>[\w\p{P}\'-]+)/your-angle", views.create_angle, name="create_angle"),  # allow user to voice opinion
    url(r"^(?P<topic>[\w\p{P}\'-]+)/", views.topic, name="topic"),  # individual topic

]