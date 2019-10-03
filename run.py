# import os
# os.system('kill -9 $(lsof -t -i:5000)')
from app import app

# app.config['SECRET_KEY'] = "mysecretkey123#"
app.debug = True
app.run()