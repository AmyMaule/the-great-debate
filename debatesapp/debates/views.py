import logging

from django.shortcuts import render

from .models import *

log_format = "%(levelname)s %(asctime)s: %(message)s"
logging.basicConfig(
    format = log_format, level = logging.DEBUG
)
logger = logging.getLogger()
logger.propagate = True


def render_frontend(request):
    context = {}
    return render(request, "build/index.html", context)
