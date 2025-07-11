@echo off
chcp 65001>nul
setlocal

:: [dev note] Very big and piled up script. I know that it can be written more careful and compact. But: it works, so i don't care

:: script developed by: https://github.com/N3M1X10
:: developed for repo: https://github.com/TheKing-OfTime/YandexMusicModClient
:: version: 1.0.0
:: created/updated: 11.07.2025

:request-admin-rights
set "arg=%1"
if "%arg%" == "admin" (
    rem echo [powershell] : Restarted with admin rights
) else (
    echo [93m[powershell] : Requesting admin rights . . .[0m
    powershell -Command "Start-Process 'cmd.exe' -ArgumentList '/k \"\"%~f0\" admin\"' -Verb RunAs"
    exit
)


:: params
set program_display_name=Yandex Music
set program=Яндекс Музыка.exe
set directory=%localappdata%\Programs\YandexMusic\

set program_download_link=https://music.yandex.ru/download/?autodownload=1

::launch program after patching
::default: ''
:: possible: [1/0/else]
:: 1 - launch program right after patching
:: 0 - do not launch program
:: and if you set empty or set something else - script will ask you, before launch prog 
set launch-after-patch=

::default: '0' 
:: [0/1]
set debug=0

:: end of params


::title
echo.
echo [107;94m [TheKing-OfTime/YandexMusicModClient] : patcher for %program_display_name% by n3m1x10 [0m
echo.


:check-client
if not exist "%directory%%program%" (
	goto :ask-for-download
) else (
	goto skip-download
)


:ask-for-download
cls
echo [93mYandex Music is not installed. Do you want to download the installer?[0m
echo [96m
echo 1. download
echo 0. exit
echo [0m
choice /c 10 /n /m "[93m[ Choose the option ]"[0m
if %errorlevel%==1 call :download-program call-from-ask
goto :close


:download-program
explorer "%program_download_link%"
cls
echo The download page was opened.
echo Please install the Yandex Music and launch this script again.
pause
if "%1"=="call-from-ask" (
	exit /b
)
:skip-download


:check-process
set checking_process=%program%
echo [93mAre '%program_display_name%' is running?[0m 
for /F "delims=" %%i in ('tasklist /fi "IMAGENAME eq %checking_process%" /fi "STATUS eq RUNNING" /fo CSV ^| find /c "%checking_process%"') do set defined_tasks_count=%%i
if %defined_tasks_count% geq 1 (
	echo [91mYes[0m
	echo [93mIt's need to be restarted to apply changes[0m
	echo [93mTrying to stop it . . .[0m
	taskkill /f /im "%checking_process%" /t
	echo Done
	:: it will be started after patching, because it was launched before me
	set launch-after-patch=1
	goto :mod
) else (
	echo [92mNo[0m
)


:mod
call :check-connection
echo.&echo [93mTrying to download the mod . . .[0m
curl -L https://github.com/TheKing-OfTime/YandexMusicModClient/releases/latest/download/app.asar > %localappdata%\Programs\YandexMusic\resources\app.asar
if %errorlevel% neq 0 (echo [91mError installing the mod. Please retry[0m&pause&goto:end) else (echo Done)
>nul timeout /t 2 /nobreak
goto :end


:ask-for-launch-program
echo.&echo [93mAre you willing to launch the [96m%program_display_name%[93m?[0m
echo [96m
echo 1. launch
echo 0. exit
echo [0m
choice /c 10 /n /m "[93m[ Choose the option ]"[0m
if %errorlevel%==1 call :launch-program call-from-ask
goto :close


:launch-program
::start the program if it's been running before patching or configured by user
cd /d "%directory%"
echo.&echo [93mTrying to launch '%program_display_name%' . . .[0m
explorer "%directory%%program%"
echo Done
if "%1"=="call-from-end" (
	exit /b
) else if "%1"=="call-from-ask" (
	exit /b
)
goto :close


:check-connection
set domain=github.com
echo.&echo [93mChecking connection to the '%domain%' . . .[0m
ping %domain% -n 1 -w 1000 > nul
if %errorlevel%==0 (
  rem do nothing
  echo Done
) else (
  echo [91mThere is no Internet connection[0m
)
exit /b


:end
:: check for 'exit right after function'
if "%eraf%"=="1" (
	goto :close
) else (
	rem do nothing
)

if "%debug%"=="1" (
	echo.
	echo [93m[debug] : Pause on the end of a file . . .[0m
	pause>nul&goto :close
)

:: if not debugging
echo.
echo [92mAll done :^)[0m

if "%launch-after-patch%"=="1" (
	call :launch-program call-from-end
) else if "%launch-after-patch%"=="0" (
	rem do nothing
	echo Press any key to exit . . .
	>nul pause
	goto :close
) else (
	:: if not configured or it's 'ask'
	call :ask-for-launch-program call-from-end
	goto :close
)

echo.&echo [92mThis window will close automatically[0m
>nul timeout /t 3
goto :close


:close
cls&endlocal&exit

