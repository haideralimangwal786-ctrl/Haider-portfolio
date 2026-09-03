@echo off
title Upload Portfolio to GitHub
color 0A
cd /d "c:\Dataaaa\Portfolio"
echo ================================================================
echo    HAIDER ALI PORTFOLIO - GITHUB UPLOAD
echo ================================================================
echo.
echo Connecting to: https://github.com/haideralimangwal786-ctrl/Haider-portfolio.git
echo Pushing 'main' branch...
echo.
git push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo ================================================================
    echo    SUCCESS! Code has been uploaded to GitHub successfully!
    echo ================================================================
) else (
    echo ================================================================
    echo    NOTE: If GitHub asks for sign in, please complete the browser
    echo    authorization prompt or enter your Personal Access Token.
    echo ================================================================
)
echo.
pause
