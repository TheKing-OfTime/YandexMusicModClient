# YandexMusicModClient
[![TotalDownloads](https://img.shields.io/github/downloads/TheKing-OfTime/YandexMusicModClient/total?label=Загрузок)](https://github.com/TheKing-OfTime/YandexMusicModClient/releases "Download") [![OS - Windows](https://img.shields.io/badge/OS-Windows-blue?logo=windows&logoColor=white)](https://github.com/TheKing-OfTime/YandexMusicModClient/releases "Download")

<p align="left">
	<a href="https://discord.gg/HGNKDxwHEH">
      <img height="35.48" alt="Сервер" src="https://github.com/user-attachments/assets/b7c8a272-b48c-411f-aca3-6512086a9a18">
   </a>
   <a href="https://github.com/TheKing-OfTime/YandexMusicModClient/">
      <img width="96" alt="English" src="https://github.com/TheKing-OfTime/YandexMusicModClient/blob/master/assets/En_Badge.png">
   </a>
  <a href="https://github.com/TheKing-OfTime/YandexMusicModClient/blob/master/doc/ru/README.md">
      <img width="96" alt="Русский" src="https://github.com/TheKing-OfTime/YandexMusicModClient/blob/master/assets/Ru_Badge_Highlighted.png">
   </a>
</p>

## Это модификация для настольного приложения Яндекс Музыка, не модифицированную версию которого можно загрузить [здесь](https://music.yandex.com/download/)
### YandexMusicModClient или его разработчик не связаны с Яндексом или какой-либо из их компаний, сотрудников и т.д.
<details>
   <summary>Сообщение для сотрудников Яндекс Музыки</summary>
   
   Поскольку вы сочли мой код полезным и скопировали некоторые части [отсюда](https://github.com/TheKing-OfTime/YandexMusicModClient/commit/5384285a8de1101102fc21f593266807b38a304f#diff-c314348839e9fcfdd871cc449297e9cf3f9631701ff29758014ba11bf9200ba0) (более конкретно, событие PLAYER_ACTION) и добавили его в ванильный клиент, возможно, вы захотите нанять меня.
   Моя работа будет намного эффективнее, если я буду работать над исходным кодом в уютном офисе, а не с минифицированной и прогнанной через webpack версией кода
</details>


## Установка

> [!WARNING]  
> ### Установка модификации для неподходящей версии клиента может привести к непредсказуемым результатам.
> Перед установкой убедитесь, что версия клиента и версия, для которой было написана модификация, совпадают.
> Это можно сделать на странице релиза.

0. Загрузите последнюю версию клиента Яндекс музыки с официального сайта https://music.yandex.com/download/
1. Откройте командную строку (Win + R -> cmd -> Enter)
2. Выполните эту команду
   ```bat
   curl -L https://github.com/TheKing-OfTime/YandexMusicModClient/releases/latest/download/app.asar > %localappdata%/Programs/YandexMusic/resources/app.asar
   ```
3. Готово!

> [!NOTE]  
> После установки модификации может потребоваться повторный вход в аккаунт.


## Возможности

### Discord Статус
<details>
   <summary>Подробнее</summary>

<details>
   <summary>Настройки</summary>
   
      "discordRPC": {
			"enable": true or false,                         //Включает или отключает disocrd RPC
			"applicationIDForRPC": "1124055337234858005",    //ID пользовательского приложения вашего для discord RPC
			"showButtons": true or false,                    //Включает или отключает все кнопки в статусе discord 
			"overrideDeepLinksExperiment": true or false,    //Включает или отключает разделение веб-кнопок и кнопок рабочего стола на одну кнопку
			"showGitHubButton": true or false,               //Включает или отключает кнопку Github, если для параметра overrideDeepLinksExperiment установлено значение true
			"afkTimeout": 15,				 //Время в минутах через которое статус в дискорде пропадёт если трек был поставлен на паузу.
			"showAlbum": true or false,                      //Включает или отключает строчку с информацией о альбоме в статусе discord 
   			"showSmallIcon": true or false,                  //Включает или отключает икноку статуса прослушивания в статусе discord 
      }
      
</details>

   
Добавляет поддержку отображения текущего трека как статуса в Discord
![image](https://github.com/user-attachments/assets/ff3b0726-6f83-4849-bce6-c5eb31523efa)

</details>

### Глобальные хоткеи
<details>
   <summary>Подробнее</summary>

   
Добавляет поддержку глобальных хоткеев.

<details>
   <summary>Настройки</summary>
   
	"globalShortcuts": {
		"TOGGLE_PLAY": "Ctrl+/",
		"MOVE_FORWARD": "Ctrl+,",
		"MOVE_BACKWARD": "Ctrl+.",
		"TOGGLE_SHUFFLE": "Ctrl+\'",
		"REPEAT_NONE": undefined,
		"REPEAT_CONTEXT": undefined,
		"REPEAT_NONE": undefined,
	}
      
</details>

</details>

### Кнопки в превью панели задач
<details>
   <summary>Подробнее</summary>

   
Добавляет поддержку расширений панели задач (Taskbar Extensions)

<details>
   <summary>Настройки</summary>
      
      "taskBarExtensions": {
			"enable": true or false //Включает или отключает расширения панели задач
		}
      
</details>

![image](https://github.com/TheKing-OfTime/YandexMusicModClient/assets/68960526/8c3711a3-4bb7-4601-a291-b5c7eb5f58f0)

</details>

### Возврат кнопки дизлайка
<details>
   <summary>Подробнее</summary>
   
Возвращает кнопку дизлайка в плеер на главной.

![image](https://github.com/user-attachments/assets/22a83331-dfc4-4c7b-92c9-4fdbe2758910)

</details>

### Отображение качества трека
<details>
   <summary>Подробнее</summary>
   
Отображает качество либо кодек текущего трека

<details>
   <summary>Настройки</summary>
      
	"playerBarEnhancement": {
  		"showDislikeButton": true //Включает или выключает отображение кнопки дизлайка в проигрывателе.
		"showCodecInsteadOfQualityMark": true //Показать кодек вместо качества
	}
      
</details>

![image](https://github.com/user-attachments/assets/da143017-b9ff-4faf-91dc-b9ccc81b1e2f)
![image](https://github.com/user-attachments/assets/3e5b6fb2-fbd3-4e04-880c-f1e556d8c4ef)

</details>

### Улучшенная анимация Моей Волны
<details>
   <summary>Подробнее</summary>
   
Улучшает поведение анимации Моей Волны. Она начинает лучше адаптироваться к музыке. Также позволяет настраивать частоту кадров в секунду при рендеринге анимации.
<details>
   <summary>Настройки</summary>
      
      "vibeAnimationEnhancement": {
	    "maxFPS": 25,             	// Максимально допустимая частота кадров в секунду. По умолчанию: 25. Рекомендуемое: 25 - 144. Не устанавливайте значание меньше 1
	    "intensityCoefficient": 1, 	// Чувствительность музыкального анализа. По умолчанию: 1; Рекомендуемое: 0,5 - 2; При значении 0 отключается улучшение анимации (почти :D)
	    "linearDeBoost": 5,		// [УСТАРЕЛО] Коэффициент выделения пиков в треке от основного трека. По умолчанию: 5. Рекомендуемое: 2 - 8. Если 1, отключает разделение пиков.
	    "playOnAnyEntity": false,	// Если включено, анимация воспроизводится, даже если источник трека не Моя Волна.
	    "disableRendering": false	// Полностью отключает анимацию. Используйте только если почувствуете значительное падение кадров в секунду. В противном случае подберите оптимальное значение параметра maxFPS для вашей системы.
      }
      
</details>

До:

https://github.com/user-attachments/assets/23a8da4d-3d6a-43c6-a5f5-965e065ed912

После:

https://github.com/user-attachments/assets/b062a3ee-d05e-4cf3-8e03-b6f8bf66525c

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
   
Позволяет скачать текущий трек вам на ПК. Нажмите на иконку качества/кодека трека чтобы выбрать путь для размещения файла. 

</details>

### Эксперементы
<details>
   <summary>Подробнее</summary>
   
Позволяет включать/выключать эксперементы. Для этого вам нужно включить enableDevTools и использовать UI в приложении в dev панели:

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
<img width="500" alt="Пример настроек внутри приложения" src="https://github.com/user-attachments/assets/89630ab8-a89c-41c3-983d-6352306398df">
</p>


> [!NOTE]  
> Чтобы изменения настроек применились требуется перезапуск приложения.

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
   <a href="https://github.com/xab4er">
      <img width="50" alt="xab4er" src="https://avatars.githubusercontent.com/u/60750449?v=4">
   </a>
   <a href="https://github.com/foreA-adoxid">
      <img width="50" alt="foreA-adoxid" src="https://avatars.githubusercontent.com/u/72875762?v=4">
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
      <img width="50" alt="SergheyUmca" src="https://avatars.githubusercontent.com/u/97682066?v=4?v=4">
   </a>
   <a href="https://github.com/dudoska">
      <img width="50" alt="dudoska" src="https://avatars.githubusercontent.com/u/94677394?v=4">
   </a>
   <a href="https://github.com/Diramix">
      <img width="50" alt="SergheyUmca" src="https://avatars.githubusercontent.com/u/79011730?v=4">
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
</p>

> Список обновляется вручную
