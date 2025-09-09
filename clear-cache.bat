@echo off
echo Clearing Next.js cache and node_modules...

REM Stop any running processes first
taskkill /F /IM node.exe 2>nul

REM Wait a moment
timeout /t 2 /nobreak >nul

REM Clear .next folders
if exist "apps\web\.next" (
    echo Removing apps\web\.next...
    rmdir /s /q "apps\web\.next" 2>nul
)

REM Clear turbo cache
if exist ".turbo" (
    echo Removing .turbo cache...
    rmdir /s /q ".turbo" 2>nul
)

echo Cache cleared! You can now run npm run dev

pause
