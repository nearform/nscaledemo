#!/bin/sh
sudo docker stop $(sudo docker ps -q)
sudo docker run -p 8000:8000 -d nscaledemo/web node app.js
