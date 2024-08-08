# YandexMusicModClient
[![TotalDownloads](https://img.shields.io/github/downloads/TheKing-OfTime/YandexMusicModClient/total?label=Downloads)](https://github.com/TheKing-OfTime/YandexMusicModClient/releases "Download") [![OS - Windows](https://img.shields.io/badge/OS-Windows-blue?logo=windows&logoColor=white)](https://github.com/TheKing-OfTime/YandexMusicModClient/releases "Download")

<p align="left">
   <a href="https://github.com/TheKing-OfTime/YandexMusicModClient/">
      <img width="96" alt="English" src="https://github.com/TheKing-OfTime/YandexMusicModClient/blob/master/assets/En_Badge_Highlighted.png">
   </a>
  <a href="https://github.com/TheKing-OfTime/YandexMusicModClient/blob/master/doc/ru/README.md">
      <img width="96" alt="Русский" src="https://github.com/TheKing-OfTime/YandexMusicModClient/blob/master/assets/Ru_Badge.png">
   </a>
</p>

## This is a modification for Yandex Music Desktop application which unmodified version can be downloaded [here](https://music.yandex.com/download/)
### YandexMusicModClient or its developer is not affiliated with Yandex or any of their companies, staff etc.
<details>
   <summary>Message for Yandex Music Staff</summary>
   
   Since you found my code usefull and copied some parts from [here](https://github.com/TheKing-OfTime/YandexMusicModClient/commit/5384285a8de1101102fc21f593266807b38a304f#diff-c314348839e9fcfdd871cc449297e9cf3f9631701ff29758014ba11bf9200ba0) (more specifically PLAYER_ACTION event) and added it to vanilla client. You might want to hire me.
   My work will be much more efficient if I work on the source code in a cozy office rather than with a minified & webpacked version of the code
</details>


## Install

> [!WARNING]  
> ### Installing the modification for an unsuitable client version can lead to unpredictable results.
> Before installing, make sure that the client version and the version for which the modification was made coincide.
> This can be checked on the Releases page

0. Download latest Yandex music client from offical site https://music.yandex.com/download/
1. Open command line
2. Execute this two commands
   ```bat
   cd %localappdata%/Programs/YandexMusic/resources/
   curl -L https://github.com/TheKing-OfTime/YandexMusicModClient/releases/download/onlyDiscordRPC/app.asar > app.asar
   ```
3. Done!

> [!NOTE]  
> Relogin may be required after patch install.


## Features

### Discord Rich Presence
<details>
   <summary>Details</summary>

   
Adds support for Discord Rich Presence

<details>
   <summary>Settings</summary>
   
      "discordRPC": {
			"enable": true or false,                         //Enables or disables disocrd RPC
			"applicationIDForRPC": "1124055337234858005",    //ID of your custom application for discord RPC
			"showButtons": true or false,                    //Enables or disables all buttons in discord Status 
			"overrideDeepLinksExperiment": true or false,    //Enables or disables split web and desktop buttons into one button
			"showGitHubButton": true or false                //Enables or disables Github button if overrideDeepLinksExperiment set to true
      }
      
</details>

![DiscordCanary_pY0zr8zq3P](https://github.com/TheKing-OfTime/YandexMusicModClient/assets/68960526/7c308ef1-77a4-4f0c-9ed8-25c36ff3ccc6)
</details>

### Taskbar Extensions
<details>
   <summary>Details</summary>

   
Adds support for Taskbar Extensions

<details>
   <summary>Settings</summary>
      
      "taskBarExtensions": {
			"enable": true or false //Enables or disables Taskbar Extensions
      }
      
</details>

![image](https://github.com/TheKing-OfTime/YandexMusicModClient/assets/68960526/8c3711a3-4bb7-4601-a291-b5c7eb5f58f0)

</details>

### Lossless / HQ+ quality
<details>
   <summary>Details</summary>
   
Unblockes Lossless quality (HQ+ in quality settings)
> Currently there are a lot of tracks that don't have lossless version.

![image](https://github.com/TheKing-OfTime/YandexMusicModClient/assets/68960526/63e37d35-71b4-46a8-b77e-4c4689e3d081)
</details>

### Return dislike button
<details>
   <summary>Details</summary>
   
Returns dislike button on main player bar

![image](https://github.com/user-attachments/assets/22a83331-dfc4-4c7b-92c9-4fdbe2758910)

</details>

### Language Switcher
<details>
   <summary>Details</summary>
   
Unblockes Language Switcher

![image](https://github.com/user-attachments/assets/0a283eaf-b745-4eeb-9cbe-990a75af76d7)

</details>


### Devtools & DevPanel
<details>
   <summary>Details</summary>
   
Devtools are disabled by default. To enable them you need modify `%appdata%\YandexMusic\config.json`:

Change `"enableDevTools": false` to `"enableDevTools": true`

![electron_L6SeZLnSAH](https://github.com/TheKing-OfTime/YandexMusicModClient/assets/68960526/ae841087-d910-45e5-a007-3fd869a493e1)

![electron_y6aOeckPLH](https://github.com/TheKing-OfTime/YandexMusicModClient/assets/68960526/4bde4785-9196-4ac6-ad3b-9ac5db5b61c8)

</details>

## Settings
Settings can be found in `%appdata%\YandexMusic\config.json`

In app UI for settings will be soon™ 

## Support
If you really enjoyed the new experience with this modification, you can support my work on it:
<p align="left">
   <a href="https://boosty.to/thekingoftime/donate">
      <img width="200" alt="Support me on Boosty" src="https://github.com/TheKing-OfTime/YandexMusicModClient/blob/master/assets/Support_Banner.png">
   </a>
</p>

## Sponsors
Thanks a lot to the sponsors who allow me to actively work on this project.
<p align="left">
   <a href="https://github.com/SergheyUmca">
      <img width="50" alt="SergheyUmca" src="https://avatars.githubusercontent.com/u/33039150?v=4">
   </a>
   <a href="https://github.com/Diramix">
      <img width="50" alt="SergheyUmca" src="https://avatars.githubusercontent.com/u/79011730?v=4">
   </a>
</p>

> This list updates manually.
