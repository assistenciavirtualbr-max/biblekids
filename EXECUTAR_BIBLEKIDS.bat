@echo off
title BibleKids - Gerador de Aulas Biblicas
cd /d "%~dp0"
echo ========================================================
echo   📖 BibleKids - Gerador de Aulas Biblicas Infantis
echo   Idiomas: Portugues, Ingles, Espanhol, Frances
echo   Servidor Local: http://localhost:8090
echo ========================================================
start "" http://localhost:8090/index.html
python -m http.server 8090
pause
