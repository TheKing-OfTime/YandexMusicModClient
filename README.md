# YandexMusicModClient
[![TotalDownloads](https://img.shields.io/github/downloads/TheKing-OfTime/YandexMusicModClient/total?label=Загрузок)](https://github.com/TheKing-OfTime/YandexMusicModClient/releases "Download") [![OS - Windows](https://img.shields.io/badge/OS-Windows-blue)](https://github.com/TheKing-OfTime/YandexMusicModClient/releases "Download") [![OS - MacOS](https://img.shields.io/badge/OS-Mac-blue)](https://github.com/TheKing-OfTime/YandexMusicModClient/releases "Download") [![OS - MacOS](https://img.shields.io/badge/OS-Linux-blue)](https://github.com/TheKing-OfTime/YandexMusicModClient/releases "Download")

<p align="left">
	<a href="https://discord.gg/HGNKDxwHEH">
      <img height="35.48" alt="Сервер" src="https://github.com/user-attachments/assets/b7c8a272-b48c-411f-aca3-6512086a9a18">
   </a>
   <a href="https://github.com/TheKing-OfTime/YandexMusicModClient/">
      <img width="96" alt="Русский" src="https://github.com/TheKing-OfTime/YandexMusicModClient/blob/master/assets/Ru_Badge_Highlighted.png">
   </a>
  <a href="https://github.com/TheKing-OfTime/YandexMusicModClient/blob/master/doc/en/README.md">
      <img width="96" alt="English" src="https://github.com/TheKing-OfTime/YandexMusicModClient/blob/master/assets/En_Badge.png">
   </a>
</p>

### Это модификация для [настольного приложения Яндекс Музыка](https://music.yandex.com/download/), главная задача которой — добавить недостающие ванильному клиенту функции, которые Яндекс не добавили сами по необъяснимым причинам.

> [!IMPORTANT]  
> ### Данная модификация НЕ даёт возможность пользоваться сервисом БЕЗ подписки Яндекс Плюс

#### YandexMusicModClient или его разработчик не связаны с Яндексом или какой-либо из их компаний, сотрудников и т.д.

<details>
   <summary>Сообщение для сотрудников Яндекс Музыки</summary>

Поскольку вы сочли мой код и идеи полезными и скопировали некоторые из них:

- [PLAYER_ACTION](https://github.com/TheKing-OfTime/YandexMusicModClient/commit/5384285a8de1101102fc21f593266807b38a304f#diff-c314348839e9fcfdd871cc449297e9cf3f9631701ff29758014ba11bf9200ba0)
- [Локальное переопределение экспериментов](https://github.com/TheKing-OfTime/YandexMusicModClient/commit/ea1939b5e81815bce7aa02c26ee3b165fd1396f3) (Появилось в ванильной версии через [~40 дней](https://github.com/TheKing-OfTime/YandexMusicModClient/commit/8ab94847fe36fe19e3500ab331adcb175f110387))
- [Исправление проблемы, из-за которой эквалайзер не применялся при запуске приложения](https://github.com/TheKing-OfTime/YandexMusicModClient/commit/7ebf999a87a0ffcfaa1d8ef5a4d576cbae853e3b) (Появилось в ванильной версии через ~50 дней с выходом 5.48.1)

и добавили их в ванильный клиент, возможно, вы захотите нанять меня.
Моя работа будет намного эффективнее, если я буду работать над исходным кодом в уютном офисе, а не с минифицированной и прогнанной через webpack версией кода
</details>

## Установка

0. Загрузите последнюю версию клиента Яндекс музыки с официального сайта https://music.yandex.com/download/
1. Скачайте и установите Патчер из репозитория https://github.com/TheKing-OfTime/YandexMusicModPatcher следуюя его порядку установки.
2. Нажмите в нём кнопку Patch.
3. Дождитесь окончания установки.
4. Готово!

Если из функций модификации вам нужны только разблокированные DevTools.
То в настройках патчера выберите Канал релизов "Только Девтулзы"

Преимущество в том что эта версия собирается полностью автоматически, и всегда использует последнюю версию ЯМ (Не спуфится как полная модификация)

## Возможности

### Discord Статус
<details>
   <summary>Подробнее</summary>

Добавляет поддержку отображения текущего трека как статуса в Discord
![image](https://github.com/user-attachments/assets/ff3b0726-6f83-4849-bce6-c5eb31523efa)

</details>

### Управление плеером с других устройств
<details>
   <summary>Подробнее</summary>


Добавляет поддержку управления воспроизведением настольного клиента с других устройств.
<div>
	<img width="250" alt="Список устройств для воспроизведения" src="https://github.com/user-attachments/assets/17196b75-85c4-42f0-af81-ab62123fde5c">
	<img width="250" alt="Управление воспроизведение с телефона на ПК клиенте" src="https://github.com/user-attachments/assets/305a94f9-4908-4c47-9d75-c0838dbad805">
</div>
<div>
	<img width="504" alt="DiscordCanary_q3lSyzS2R9" src="https://github.com/user-attachments/assets/ebd7a0c0-db68-4c26-b0f9-481e1ea9e57b" />
	<br/>
	<img width="504" alt="Яндекс_Музыка_1AZwtDf0Tz" src="https://github.com/user-attachments/assets/ec3cba2f-9b58-4a07-bc60-1920fc94b759" />
</div>





<details>
   <summary>Настройки</summary>

Можно выключить в настройках внутри приложения

![image](https://github.com/user-attachments/assets/8b7280d6-f2ef-4a0e-8835-32e173a1e843)

</details>

</details>

### Скробблинг Last.FM
<details>
   <summary>Подробнее</summary>


Добавляет поддержку cкробблинга в Last.FM. Трек заскробблится если вы прослушаете хотя бы его половину. (Но при этом запрос скроббла отправиться при смене трека)

<img width="550" alt="Страница пользователя Last.FM с заскроббленными треками" src="https://github.com/user-attachments/assets/9a47a37b-b895-4a06-8538-fb94eb009290">

<details>
   <summary>Настройки</summary>

Авторизоваться в Last.FM, а также включить/выключить функцию можно в соответствующем меню в настройках приложения.

![image](https://github.com/user-attachments/assets/0fbd13ed-7837-49c2-9b28-5bc210480002)

<details>
   <summary>Процесс авторизации</summary>

https://github.com/user-attachments/assets/079f8b38-ca6b-4fef-b6a2-efa853fd583f

</details>

</details>

</details>


### Настраиваемая папка кеша
<details>
   <summary>Подробнее</summary>


В ванильной версии весь кеш (в том числе скачанные вами треки для офлайн-прослушивания) хранится по пути `%appdata%/YandexMusic/`

Данная функия позволяет использовать для кеша другой путь. Например чтобы 10 гигабайт скаченной вами музыки не тратили место на системном диске

![image](https://github.com/user-attachments/assets/f48a8d32-d03f-4770-8204-460f37ab059f)

</details>


### Глобальные хоткеи
<details>
   <summary>Подробнее</summary>


Добавляет поддержку глобальных хоткеев.

<details>
   <summary>Настройки</summary>
	
```json
"globalShortcuts": {
	"TOGGLE_PLAY": "Ctrl+/",
	"MOVE_FORWARD": "Ctrl+,",
	"MOVE_BACKWARD": "Ctrl+.",
	"TOGGLE_SHUFFLE": "Ctrl+'",
	"REPEAT_NONE": "",
	"REPEAT_CONTEXT": "",
	"REPEAT_NONE": "",
	"TOGGLE_LIKE": "",
	"TOGGLE_DISLIKE": ""
}
```

</details>

</details>

### Улучшение превью панели задач
<details>
   <summary>Подробнее</summary>


Добавляет поддержку расширений панели задач (Taskbar Extensions)

![browser_Y2f5KiyCYN](https://github.com/user-attachments/assets/877f5c77-f196-4702-bd44-7da60e1a0d93)


</details>

### Повтор трека в Моей Волне
<details>
   <summary>Подробнее</summary>

Добавляет возможность включить повтор трека когда играет Моя Волна.

</details>

### Отображение качества трека
<details>
   <summary>Подробнее</summary>

Отображает качество либо кодек текущего трека

![image](https://github.com/user-attachments/assets/424434fb-5e66-4a85-8ca2-90179cb7f357)


</details>

### Улучшенная анимация Моей Волны
<details>
   <summary>Подробнее</summary>

Улучшает поведение анимации Моей Волны. Она начинает лучше адаптироваться к музыке. Также позволяет настраивать частоту кадров в секунду при рендеринге анимации.

До:

https://github.com/user-attachments/assets/23a8da4d-3d6a-43c6-a5f5-965e065ed912

После:

https://github.com/user-attachments/assets/b062a3ee-d05e-4cf3-8e03-b6f8bf66525c

</details>

### Поиск при добавлении трека в плейлист
<details>
   <summary>Подробнее</summary>

Добавляет строку поиска в контекстное меню выбора плейлиста.

![image](https://github.com/user-attachments/assets/03924f52-6e37-4d6a-ad9e-c079ec739cd8)


</details>

### Информация о скачанных треках
<details>
   <summary>Подробнее</summary>

Добавляет информацию о скачанных треках на страницу настроек (количество скачанных треков и используемое хранилище для скачанных треков)

![image](https://github.com/user-attachments/assets/d3ba9ada-941c-4bd2-8c53-dad54090bf4e)


</details>

### Скачивание текущего трека в файл
<details>
   <summary>Подробнее</summary>

Позволяет скачать текущий трек вам на ПК.

![image](https://github.com/user-attachments/assets/95a52251-401a-4071-9ee3-914b8c7b7c8f)

![image](https://github.com/user-attachments/assets/aaf79024-34cb-4159-9790-501f21534e54)



</details>

### Эксперименты
<details>
   <summary>Подробнее</summary>

Позволяет включать/выключать эксперементы. Для этого вам нужно включить Режим разработчика.

![image](https://github.com/user-attachments/assets/b341e6cb-58e3-4dfa-b8b3-e6ece72539a5)


</details>

### Devtools & Панель Разработчика
<details>
   <summary>Подробнее</summary>

Devtools по умолчанию отключены. Чтобы включить их, вам необходимо изменить `%appdata%\YandexMusic\config.json`:

Измените `"enableDevTools": false` на `"enableDevTools": true`

![electron_L6SeZLnSAH](https://github.com/TheKing-OfTime/YandexMusicModClient/assets/68960526/ae841087-d910-45e5-a007-3fd869a493e1)

![electron_y6aOeckPLH](https://github.com/TheKing-OfTime/YandexMusicModClient/assets/68960526/4bde4785-9196-4ac6-ad3b-9ac5db5b61c8)

</details>

## Настройки
Настройки можно найти в `%appdata%\YandexMusic\config.json`

Настройки внутри приложения:
<p align="left">
<img width="500" alt="Пример настроек внутри приложения" src="https://github.com/user-attachments/assets/b9aa1828-476c-4fde-86a8-84fb02eb0817">
</p>


## Сборка проекта из исходников

0. Убедитесь что Яндекс Музыка и node.js уже установлены
1. Склонируйте проект
```cmd
git clone https://github.com/TheKing-OfTime/YandexMusicModClient.git
```
2. Установите зависимости
```cmd
npm install
```
Учтите, что зависимости вам нужно устанавливать в корневой папке проекта, а не в `/src/`

Для удобства сборки в проекте есть cli скрипт `toolset.js`. Он позволят быстро и просто распоковать, упаковать, опубилковать, спуфнуть, или пропатчить код.

3. Собрать проект
```cmd
node toolset.js build -d -m
```
Эта команда автоматически оптимизирует код (Минифицирует его), а после запакует его по пути Яндекс Музыки по умолчанию `%localappdata%/Programs/YandexMusic/resources/app.asar`

4. Для быстрой сборки проекта при разработке можете использовать команду
```cmd
node toolset.js rebuild
```
Не обязательные долгие этапы будут пропущены.


## Поддержка
Если вам действительно понравился новый опыт использования Яндекс Музыки с этой модификацией, вы можете поддержать мою работу над ней:
<p align="left">
   <a href="https://boosty.to/thekingoftime/donate">
      <img width="250" alt="Поддержите меня на бусти" src="https://github.com/user-attachments/assets/7b341f16-6513-4138-a3c5-b5892b062f63">
   </a>
</p>

## Спонсоры
Большое спасибо спонсорам, которые позволяют мне активно работать над этим проектом.
<p align="left">
   <a href="https://github.com/Nulliik">
      <img width="50" alt="Nulliik" src="https://avatars.githubusercontent.com/u/37436671?v=4">
   </a>
   <a href="https://github.com/dmitrybabich">
      <img width="50" alt="dmitrybabich" src="https://avatars.githubusercontent.com/u/6319078?v=4">
   </a>
   <a href="https://www.last.fm/ru/user/am0rall">
      <img width="50" alt="am0rall" src="https://lastfm.freetls.fastly.net/i/u/avatar170s/a983db6495ea41c8c16777aa0679632d.png">
   </a>
   <a href="https://github.com/ajioe1111">
      <img width="50" alt="ajioe1111" src="https://avatars.githubusercontent.com/u/39803571?v=4">
   </a>
   <a href="https://github.com/xab4er">
      <img width="50" alt="xab4er" src="https://avatars.githubusercontent.com/u/60750449?v=4">
   </a>
   <a href="https://github.com/Crosbic">
      <img width="50" alt="Crosbic" src="https://avatars.githubusercontent.com/u/71810318?v=4">
   </a>
   <a href="https://github.com/foreA-adoxid">
      <img width="50" alt="foreA-adoxid" src="https://avatars.githubusercontent.com/u/72875762?v=4">
   </a>
   <a href="https://github.com/Maks1mio">
      <img width="50" alt="Maks1mio" src="https://avatars.githubusercontent.com/u/44835662?v=4">
   </a>
   <a href="https://github.com/FaSSteR">
      <img width="50" alt="FaSSteR" src="https://avatars.githubusercontent.com/u/50427367?v=4">
   </a>
   <a href="https://github.com/Dott-rus">
      <img width="50" alt="Dott-rus" src="https://avatars.githubusercontent.com/u/78660260?v=4">
   </a>
   <a href="https://github.com/Lemon4ksan">
      <img width="50" alt="Lemon4ksan" src="https://avatars.githubusercontent.com/u/122788290?v=4">
   </a>
   <a href="https://github.com/SergheyUmca">
      <img width="50" alt="SergheyUmca" src="https://avatars.githubusercontent.com/u/33039150?v=4">
   </a>
   <a href="https://github.com/schwarzalexey">
      <img width="50" alt="schwarzalexey" src="https://avatars.githubusercontent.com/u/97682066?v=4?v=4">
   </a>
   <a href="https://github.com/dudoska">
      <img width="50" alt="dudoska" src="https://avatars.githubusercontent.com/u/94677394?v=4">
   </a>
   <a href="https://diramix.github.io/html-profile/">
      <img width="50" alt="Diramix" src="https://avatars.githubusercontent.com/u/79011730?v=4">
   </a>
   <a href="https://github.com/trigger-off">
      <img width="50" alt="trigger-off" src="https://avatars.githubusercontent.com/u/71810229?v=4">
   </a>
   <a href="https://github.com/Baduga">
      <img width="50" alt="Baduga" src="https://avatars.githubusercontent.com/u/69755854?v=4">
   </a>
   <a href="https://github.com/LazyMind">
      <img width="50" alt="LazyMind" src="https://avatars.githubusercontent.com/u/87148057?v=4">
   </a>
   <a href="https://github.com/Schelchki">
      <img width="50" alt="Schelchki" src="https://avatars.githubusercontent.com/u/162707132?v=4">
   </a>
   <a href="https://github.com/entaneey">
      <img width="50" alt="entaneey" src="https://avatars.githubusercontent.com/u/195827686?v=4">
   </a>
   <a href="https://github.com/saqura1337">
      <img width="50" alt="saqura1337" src="https://avatars.githubusercontent.com/u/68153864?v=4">
   </a>
   <a href="https://github.com/alex2810com">
      <img width="50" alt="alex2810com" src="https://avatars.githubusercontent.com/u/187911293?v=4">
   </a>
   <a href="https://github.com/ellatuk">
      <img width="50" alt="ellatuk" src="https://avatars.githubusercontent.com/u/87390648?v=4">
   </a>
   <a href="https://github.com/LockMean">
      <img width="50" alt="LockMea" src="https://avatars.githubusercontent.com/u/214841821?v=4">
   </a>
   <a href="https://github.com/Dimas-VM">
      <img width="50" alt="LockMea" src="https://avatars.githubusercontent.com/u/179121916?v=4">
   </a>
   <a href="https://github.com/Danila0986">
      <img width="50" alt="Danila0986" src="https://avatars.githubusercontent.com/u/157834445?v=4">
   </a>
   <a href="https://github.com/Cheafiss">
      <img width="50" alt="Cheafiss" src="https://avatars.githubusercontent.com/u/125489408?v=4">
   </a>
   <a href="https://github.com/raxemus">
      <img width="50" alt="raxemus" src="https://avatars.githubusercontent.com/u/6419721?v=4">
   </a>
   <a href="https://github.com/Ryto0">
      <img width="50" alt="Ryto0" src="https://avatars.githubusercontent.com/u/113520566?v=4">
   </a>
   <a href=" https://github.com/Rubikoid">
      <img width="50" alt="Rubikoid" src="https://avatars.githubusercontent.com/u/5082689?v=4">
   </a>
</p>

> Список обновляется вручную
