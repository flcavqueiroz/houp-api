# Repositório para atualizar Backend | Ho-Up 

* Inclui arquivos da API
* Cria  e isola o ambiente e suas variáveis
```
python3 -m venv .venv
source .venv/bin/activate
```

* Instala dependências do projeto
```
*pip install -r requirements.txt
```
* Aplica as migrações e roda o servidor local
```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
* Cria usuário administrador
```
python manage.py createsuperuser
```