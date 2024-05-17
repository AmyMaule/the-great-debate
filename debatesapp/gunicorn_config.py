import os

port = os.environ.get('PORT') or 8000
bind = f'0.0.0.0:{port}'
