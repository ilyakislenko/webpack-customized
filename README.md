# База для создания небольших реактивных проектов с использованием Typescript, GraphQL и Linaria.
##  Предисловиe

Использование create-react-app в качестве шаблона для проектирования проектов является причиной ряда проблем для новичков:

- Большое количество неиспользуемых зависимостей(на которые не обратит внимание новичок).
- Крупный размер бандла(в следствие чего и долгая сборка самого проекта).
- Также невозможность интеграции многих библиотек.

## Альтернатива
 Данная сборка является моей ЛИЧНОЙ попыткой отойти от использования CRA. Как следствие, это решает ряд моих ЛИЧНЫХ проблем:
- Скорость сборки проекта теперь ~8.5 секунд.
- Есть только те зависимости, которые нужны мне.
- В любой момент я могу подключить дополнительный лоадер и вшить нужный мне функционал.
- Ранее недоступные мне библиотеки(как,например,Linaria – zero-runtime) теперь работают!
- Мне наконец-то не придется пылесосить форумы по починке CRA из-за неправильного чиха
##  Функционал
На данный момент вы можете с нуля начать использовать React,Typescript,Linaria и Apollo-client(В зависимостях имеется sass в моих личных целях, но в будущем я его уберу).
Также присутствует псевдо-бэкенд в виде локального Apollo-server на Typescript.
##  Итоги
В будущем сборка будет обновляться и оптимизироваться по мере роста моего опыта(сейчас ~1.5 года).
Если вы начинающий разработчик, вы могли бы попробовать использовать нечто большее, чем просто CRA


