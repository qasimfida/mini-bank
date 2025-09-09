# Development Setup Guide

## Quick Start (Recommended)

### 1. Setup Environment
```bash
# Copy environment template
cp env.example .env

# Edit .env file with these settings for quick start:
DATABASE_URL="file:./dev.db"
JWT_SECRET="development-secret-key-change-in-production"
NEXT_PUBLIC_API_URL="http://localhost:3001"
```

### 2. Setup Database (SQLite for easy development)
```bash
cd prisma
npx prisma generate
npx prisma migrate dev --name init
```

### 3. Start Development Servers

#### Option A: All apps together
```bash
npm run dev
```

#### Option B: Individual apps (recommended for debugging)
```bash
# Terminal 1 - API Server
cd apps/api
npm run dev

# Terminal 2 - Web App
cd apps/web  
npm run dev

# Terminal 3 - Mobile App (optional)
cd apps/mobile
npm start
```

## Troubleshooting

### Issue 1: API "Cannot find package 'express'"
```bash
cd apps/api
rm -rf node_modules
npm install
```

### Issue 2: Web app permission errors on Windows
```bash
cd apps/web
# Remove .next folder if it exists
rmdir /s /q .next
# Or try running as administrator
```

### Issue 3: Database connection issues
- Use SQLite for development: `DATABASE_URL="file:./dev.db"`
- For PostgreSQL: Make sure PostgreSQL is running and credentials are correct

### Issue 4: Port conflicts
- Web app uses port 3000 (will auto-switch to 3002 if busy)
- API uses port 3001
- Kill processes: `npx kill-port 3000 3001`

## Development URLs

- **Web App**: http://localhost:3000 (or 3002)
- **API Server**: http://localhost:3001
- **API Health Check**: http://localhost:3001/health

## Default Login

After setting up the database, you can create an admin user via the registration page:
- Use role: "Admin" during registration
- Or register as Customer for limited access

## Database Tools

```bash
# View database in Prisma Studio
cd prisma
npx prisma studio

# Reset database
npx prisma migrate reset

# Apply schema changes
npx prisma db push
```

## Production Database Setup

For production, update your `.env`:
```bash
# PostgreSQL (recommended for production)
DATABASE_URL="postgresql://username:password@host:5432/database"

# Update Prisma schema
# Change provider from "sqlite" to "postgresql" in prisma/schema.prisma
```

## Common Commands

```bash
# Install all dependencies
npm install

# Build for production
npm run build

# Lint code
npm run lint

# Clean build cache
npm run clean
```

## File Structure Overview

```
mini-bank/
├── apps/
│   ├── web/          # Next.js frontend (port 3000)
│   ├── mobile/       # React Native app
│   └── api/          # Express.js backend (port 3001)
├── packages/         # Shared packages
├── prisma/          # Database schema & migrations
└── .env             # Environment variables (create from env.example)
```

---

🎉 **Happy coding!** If you encounter issues, check this guide or open an issue on GitHub.
