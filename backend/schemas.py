from pydantic import BaseModel
from typing import Optional
from models.user import UserRole

class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Optional[str] = None

class UserBase(BaseModel):
    username: str
    role: UserRole

class UserCreate(UserBase):
    password: str

class UserUpdate(BaseModel):
    password: Optional[str] = None
    role: Optional[UserRole] = None

class UserOut(UserBase):
    id: int

    class Config:
        orm_mode = True
