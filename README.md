# Описание работы сервиса

### Порядок установки и запуска

1. Клонировать с https://github.com/TreasureMaster/cpu_monitoring
2. Установить venv
3. Установить требуемые библиотеки `pip install -r requirements.txt`
4. Создать БД и пользователя в PostgreSQL.
5. Скопировать и переименовать файл `sample.env` в папке `monitoring/config/.env` в файл `.env`
6. Заполнить файл `.env` своими данными
7. Перейти в папку `monitoring`
8. Применить миграции `py manage.py migrate`
9. Запустить сервис `py manage.py runserver --noreload`
10. На главной странице сервиса `localhost:8000` нажать ссылку `Overview`

> **_Внимание:_** Запуск сервиса без ключа `--noreload` приведет к множественному запуску
> задач мониторинга процессора. Данные будут недействительны.

Сервис создан только для среды разработки для демонстрации возможностей.

> **_Внимание:_** В самом начале запуска необходимо дождаться, пока БД будет заполнена данными мониторинга.

> **_Внимание:_** Временные отметки не синхронизированы друг с другом на 5-секундном графике и усредненном 5-минутном.
> Для этого на картинке показаны метки времени, где они совпадают.

### Технологический стек

1. PostgreSQL - основная СУБД
2. Python 3.10 - основная версия разработки
3. Django - базовый фреймворк
4. psutil - библиотека для работы с мониторингом ресурсов
5. APScheduler - библиотека для работы с периодическими задачами