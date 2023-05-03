import os

from django.core.exceptions import ImproperlyConfigured


_ENV_PATH = '.env\.env'

try:
    from dotenv import load_dotenv, find_dotenv
except:
    pass
else:
    load_dotenv(find_dotenv(_ENV_PATH))


def get_secret(setting):
    """Get a secret variable or return an explicit exception."""
    try:
        return os.environ[setting]
    except KeyError:
        raise ImproperlyConfigured(f'Set the {setting} environment variable')
