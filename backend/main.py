from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from starlette import status
from starlette.responses import RedirectResponse

from auth import oauth2_scheme, create_access_token
from core.config import settings
from api.v1 import login
from jose import jwt, JWTError
from schemas import TokenData

app = FastAPI(
    title="FastAPITest",
    description="FastAPI Test",
    version="0.1.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM]
        )
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception
    return token_data


@app.get("/")
async def root():
    return RedirectResponse(url="/docs")


@app.get("/users/me")
async def read_users_me(current_user: TokenData = Depends(get_current_user)):
    return current_user


app.include_router(login.router, prefix="/api/v1", tags=["login"])


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
