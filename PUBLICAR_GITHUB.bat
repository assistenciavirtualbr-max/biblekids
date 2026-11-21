@echo off
title BibleKids - Publicar no GitHub
cd /d "%~dp0"
echo =========================================================================
echo   📖 BibleKids - Publicacao Automatica no GitHub Pages
echo =========================================================================
echo.

git init
git branch -M main
git add .
git commit -m "BibleKids: Gerador Multilingue de Aulas Biblicas Infantis - Layout e Ordem Pedagogica Atualizados"

echo.
echo [1/2] Arquivos commitados localmente com sucesso!
echo.
echo Para colocar o projeto no ar no GitHub e vender para o mundo:
echo.
echo 1. Crie um repositorio publico no seu GitHub (ex: bible-kids)
echo 2. Execute os seguintes comandos (se ainda nao conectou o remote):
echo.
echo    git remote add origin https://github.com/SEU-USUARIO/bible-kids.git
echo    git push -u origin main
echo.
echo 3. No GitHub: va em Settings -> Pages -> Build and deployment -> Source:
echo    Selecione "GitHub Actions" (ou "Deploy from a branch -> main / root").
echo.
echo Seu aplicativo ficara online em https://SEU-USUARIO.github.io/bible-kids/
echo com SSL gratis, CDN mundial e pronto para uso e venda global!
echo.
echo =========================================================================
pause
