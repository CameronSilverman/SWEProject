#! /bin/bash

curl -o wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh

chmod +x wait-for-it.sh

./wait-for-it.sh postgres:5432 -- ./server