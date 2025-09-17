from sqlalchemy.orm import sessionmaker
from db.database import engine
from models.user import User
from auth import get_password_hash

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
db = SessionLocal()

username = "admin"
password = "admin"

user = db.query(User).filter(User.username == username).first()
if not user:
    hashed_password = get_password_hash(password)
    user = User(username=username, hashed_password=hashed_password, role="admin")
    db.add(user)
    db.commit()
    print("Admin user created")
else:
    print("Admin user already exists")

db.close()
