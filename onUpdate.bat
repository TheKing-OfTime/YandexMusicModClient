@echo off
echo === Запуск действий по апдейту ===

node toolset.js extract -pd
if errorlevel 1 goto :error

node dataminer\dataminer.js
if errorlevel 1 goto :error

node dataminer\diffCalculator.js diff -s
if errorlevel 1 goto :error

echo === Действий успешно выполнены ===
goto :end

:error
echo *** Ошибка! Скрипт остановлен. Код возврата: %errorlevel%
exit /b %errorlevel%

:end
