import os
import sys


def run():
    print("starting the application.......")
    
    os.system("pip install -r YAAH-V2-BACKEND/requirements.txt --break-system-packages")
    os.system("source YAAH-V2-BACKEND/myenv/bin/activate && python YAAH-V2-BACKEND/manage.py makemigrations && python YAAH-V2-BACKEND/manage.py migrate")
    os.system("python YAAH-V2-BACKEND/manage.py runserver")
    os.system("cd YAAH-V2-FRONTEND && npm run dev")

run()
