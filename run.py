# import os
# os.system('kill -9 $(lsof -t -i:5000)')
from flaskblog import app

if __name__ == '__main__':
    app.run(debug=True)