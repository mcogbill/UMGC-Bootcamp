# UMGC-Bootcamp-Notes

## Ubuntu

- Root User: sudo -s; apt-get update && apt-get upgrade
- Requirements: pip3 freeze; pip3 freeze > requirements.txt
- Requirements Install: pip install -r requirements.txt
- Python Venv: python3 -m venv venv; source venv/bin/activate; deactivate; flask --app app run --debug
- Flask Install: pip install Flask; set FLASK_APP=app.py; flask run

## Git

- git status (check status)
- git add 'file_name'
- git add . (add all untracked changes)
- git add --all (don't use this)
- git commit -m "add comment here"
- git log --oneline (git status for github push)
- git push -u origin master (first time setup only)
- git push origin master (specify push to github)
- git push (use this)
- git clone <https://paste-github-repository-address-here>

## Node/Express

- npm install npm -global
- npm init
- npm install express
- npm install axios
- node 'file_name' (Example: app.js)
- nodemon 'file_name' (Example: app.js)
- npm install pg (Install psql)

## SQL

Build Flow Charts: <https://app.diagrams.net/>

- cmd status: sudo service postgresql (status, start, stop)
- cmd init: psql OR psql (db_file_name)
- createdb testdb
- Connect to a Database: “psql -d db_name -U user_name”.
- Check Postgres Version: “SELECT VERSION();”.
- List All Databases: “\l”.
- Access or Switch a Database: “\c db_name”.
- List All Tables: “\dt”.
- Describe All Tables: “\d”.
- Describe a Specific Table: “\d tab_name”.
- List All Schemas: “\dn”.
- List All Views: “\dv”.
- List All Functions: “\df”.
- List All Users: “\du”.
- Show Commands History: “\s”
- Save Query’s Results to a Specific File: “\o file_name”.
- Run psql Commands/queries From a Particular File: “\i file_name”.
- Execute Previous Command: “\g”.
- Show Query Execution Time: “\timing”.
- Get Output in HTML Format: “\H”.
- Align Columns Output: “\a”.
- Get Help: “\h”.
- Get All psql Commands: “\?”.
- Clear Screen: “\! cls”.
- Quit psql: “\q”.
