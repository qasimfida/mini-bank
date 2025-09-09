# Mini Bank - Setup Instructions

## 🚀 Quick Start Guide

### 1. Clone and Install
```bash
git clone https://github.com/qasimfida/mini-bank.git
cd mini-bank
npm install
```

### 2. Environment Setup
```bash
# Copy environment template
cp env.example .env

# Edit .env with your database URL and JWT secret
# DATABASE_URL="postgresql://username:password@localhost:5432/minibank"
# JWT_SECRET="your-super-secret-jwt-key-here"
```

### 3. Database Setup
```bash
# Generate Prisma client
cd prisma
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init

# (Optional) View database in Prisma Studio
npx prisma studio
```

### 4. Start Development Servers
```bash
# Start all apps with Turborepo
npm run dev

# This will start:
# - Web app: http://localhost:3000
# - API server: http://localhost:3001
# - Mobile app: Expo development server
```

## 🛠️ Individual App Commands

### Web App (Next.js)
```bash
cd apps/web
npm run dev     # Development server
npm run build   # Production build
npm run start   # Production server
```

### API Server (Express.js)
```bash
cd apps/api
npm run dev     # Development with file watching
npm run start   # Production server
```

### Mobile App (React Native)
```bash
cd apps/mobile
npm run android # Run on Android
npm run ios     # Run on iOS (macOS only)
npm run web     # Run in web browser
```

## 📝 Default Credentials

### Admin Account
- Email: admin@minibank.com  
- Password: admin123

### Creating Users
Users can register through the web interface:
- Customer accounts start with $0 balance
- Admin accounts start with $100,000 balance

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect GitHub repo to Vercel
2. Set environment variables:
   - `DATABASE_URL`
   - `JWT_SECRET`
   - `NEXT_PUBLIC_API_URL`
3. Deploy automatically

### Netlify
1. Connect GitHub repo to Netlify
2. Build settings already configured in `netlify.toml`
3. Set environment variables in Netlify dashboard

### Database Hosting
- **Supabase** (Recommended): Free PostgreSQL with easy setup
- **PlanetScale**: MySQL-compatible with great DX
- **Railway**: PostgreSQL with simple deployment
- **Heroku Postgres**: Reliable PostgreSQL hosting

## 🏗️ Project Structure Overview

```
mini-bank/
├── apps/
│   ├── web/          # Next.js frontend
│   ├── mobile/       # React Native app  
│   └── api/          # Express.js backend
├── packages/
│   ├── ui/           # Shared components
│   ├── widgets/      # Banking widgets
│   ├── hooks/        # Custom hooks
│   ├── utils/        # Utilities
│   ├── validations/  # Schemas
│   └── config/       # Configurations
└── prisma/           # Database schema
```

## 🔧 Configuration Files

- `turbo.json` - Turborepo pipeline configuration
- `vercel.json` - Vercel deployment settings
- `netlify.toml` - Netlify deployment settings
- `prisma/schema.prisma` - Database schema
- `env.example` - Environment variables template

## 🧪 Features to Test

### Admin Features
1. Register/Login as admin
2. View dashboard with system stats
3. Manage users
4. Issue loans
5. Process transactions

### Customer Features  
1. Register/Login as customer
2. View personal dashboard
3. Apply for loans
4. Purchase shares
5. Monitor credit score

## 🐛 Troubleshooting

### Common Issues

**Port conflicts:**
```bash
# Kill processes on ports 3000/3001
npx kill-port 3000 3001
```

**Database connection:**
```bash
# Test database connection
cd prisma
npx prisma db push
```

**Node version:**
- Ensure Node.js 18+ is installed
- Use `node --version` to check

**Package installation:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📞 Support

- GitHub Issues: Report bugs and feature requests
- Documentation: Check README.md for detailed info
- Environment: Ensure all environment variables are set correctly

## 🎯 Next Steps

1. Customize the UI/UX to match your brand
2. Implement additional banking features
3. Add payment gateway integration
4. Set up monitoring and analytics
5. Configure automated testing

---

Happy coding! 🎉
