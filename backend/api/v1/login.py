from datetime import timedelta

from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm

from auth import create_access_token, verify_password
from core.config import settings
from schemas import Token

router = APIRouter()


@router.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    # In a real application, you would fetch the user from the database
    # and verify the password.
    # For this example, we'll use a fixed username and password.
    if not (form_data.username == "admin" and verify_password(form_data.password, "$2b$12$JhTt1R0amtuZ0lQdVjZJIu3qwMjn1hb/EtcE2PovyY0Ae44Q3BjXq")):
        raise HTTPException(
            status_code=401,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": form_data.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}
