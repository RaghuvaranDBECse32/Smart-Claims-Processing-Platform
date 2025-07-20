from fastapi import FastAPI
from app.api.routes import router

app = FastAPI(title="Smart Claims Processing Platform")
app.include_router(router)
