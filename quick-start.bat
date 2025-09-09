@echo off
echo Setting up Mini Bank for development...
echo.

REM Create .env file
echo Creating .env file...
echo # Database> .env
echo DATABASE_URL="file:./dev.db">> .env
echo.>> .env
echo # JWT Secret>> .env
echo JWT_SECRET="development-secret-key-change-in-production">> .env
echo.>> .env
echo # API Configuration>> .env
echo NODE_ENV="development">> .env
echo PORT=3001>> .env
echo FRONTEND_URL="http://localhost:3000">> .env
echo.>> .env
echo # Next.js Frontend>> .env
echo NEXT_PUBLIC_API_URL="http://localhost:3001">> .env

echo .env file created successfully!
echo.

echo Setting up database...
cd prisma
call npx prisma generate
call npx prisma migrate dev --name init
cd ..

echo.
echo Setup complete! You can now run:
echo   npm run dev
echo.
echo Or start apps individually:
echo   cd apps/api && npm run dev
echo   cd apps/web && npm run dev
echo.
pause
