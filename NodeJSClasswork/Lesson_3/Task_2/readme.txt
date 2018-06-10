Задача 2.
Запустите в качестве дочернего процесса http сервер door.js который после получения
данных через url браузера передает данные родительскому процессу и заканчивает свою
работу.
Строка передачи данных через URL:
localhost:8080?id=13007&code='delete from user'&isNaN=true
localhost:8080?id=1&code='delete from user '
Разбор параметров.
var _get = url.parse(request.url, true).query;