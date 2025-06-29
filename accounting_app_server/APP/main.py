from fastapi import FastAPI
from config.config import settings
from api.user.user import router

def include_router(app):
    app.include_router(router)

def start_app():
    app = FastAPI(title= settings.PROJECT_NAME, version=settings.PROJECT_VERSION)
    include_router(app)
    return app

app = start_app()