# Basic Music Manager

## Requirements:

* Python >= 3.5
* Install pipenv: `pip3 install pipenv`
* npm >= 6.7.0

## To install:

* Install Python dependencies: `pipenv install` or `python3 -m pipenv install`
* Install Javascript dependencies: `npm i`
* Migrate: `pipenv run python ./musicmanager/manage.py migrate` or `python3 -m pipenv run python ./musicmanager/manage.py migrate` 
* Launch app: `pipenv run python ./musicmanager/manage.py runserver` or `python3 -m pipenv run python ./musicmanager/manage.py runserver`
* Head over http://127.0.0.1:8000/

## Technologies:

* Frontend: React
* Backend: Django + Django Rest Framework
* Extra: Babel, Webpack, Bootstrap 4
