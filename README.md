# Mini Bank - Banking Management System

A comprehensive banking web and mobile application built with modern technologies for managing loans, shares, transactions, and borrower scores.

## 🏗️ Project Architecture

This project uses a **Turborepo** monorepo structure with the following apps and packages:

### Apps
- **Web App** (`apps/web`) - Next.js 14 web application
- **Mobile App** (`apps/mobile`) - React Native Expo application
- **API Server** (`apps/api`) - Express.js REST API backend

### Packages
- **UI** (`packages/ui`) - Shared shadcn/ui components
- **Widgets** (`packages/widgets`) - Banking feature widgets
- **Hooks** (`packages/hooks`) - Custom React hooks
- **Utils** (`packages/utils`) - Utility functions
- **Validations** (`packages/validations`) - Yup validation schemas
- **Config** (`packages/config`) - Environment configurations

## 🛠️ Tech Stack

### Frontend
- **React** (Next.js 14) - Web application framework
- **React Native** (Expo) - Mobile application
- **shadcn/ui + Tailwind CSS** - Modern UI component library
- **Framer Motion** - Smooth animations
- **React Query** (@tanstack/react-query) - API data fetching & caching
- **Jotai** - Global state management
- **React Hook Form + Yup** - Form handling & validation
- **Axios** - HTTP client

### Backend
- **Express.js** - REST API server
- **Prisma ORM** - Database schema & queries
- **PostgreSQL** - Primary database
- **JWT** - Authentication system
- **bcryptjs** - Password hashing

### Development
- **Turborepo** - Monorepo management
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 🚀 Features

### Admin Features
- Dashboard with system overview
- User management
- Manual transaction entry (deposits, withdrawals, expenses)
- Loan issuance and management
- Share management
- Borrower score adjustments

### Customer Features
- Personal dashboard
- Loan applications and tracking
- Share purchases
- Transaction history
- Borrower score monitoring

### Core Banking Features
1. **Account Management** - User accounts with balance tracking
2. **Loan System** - Fixed/reducing balance interest, installments, penalties
3. **Share System** - Monthly share purchases to improve scores
4. **Scoring System** - Borrower scores based on payments and shares
5. **Transaction Management** - Complete transaction history

## 📱 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/qasimfida/mini-bank.git
   cd mini-bank
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `env.example` to `.env`
   - Update database URL and other environment variables

4. **Database Setup**
   ```bash
   cd prisma
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Start development servers**
   ```bash
   npm run dev
   ```

This will start:
- Web app: http://localhost:3000
- API server: http://localhost:3001
- Mobile app: Expo development server

## 🚀 Deployment

### Vercel (Recommended for Web App)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify (Alternative)
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `apps/web/.next`

### API Deployment
- Deploy API to platforms like Railway, Render, or Heroku
- Ensure PostgreSQL database is accessible
- Update `NEXT_PUBLIC_API_URL` in web app

## 📁 Project Structure

```
mini-bank/
├── apps/
│   ├── web/                     # Next.js web app
│   │   ├── src/
│   │   │   ├── app/            # App router pages
│   │   │   ├── components/     # React components
│   │   │   ├── lib/           # Utilities & API
│   │   │   ├── hooks/         # Custom hooks
│   │   │   └── store/         # State management
│   │   └── package.json
│   ├── mobile/                  # React Native app
│   └── api/                     # Express.js backend
│       ├── routes/             # API routes
│       ├── middleware/         # Auth & validation
│       └── index.js           # Server entry
├── packages/
│   ├── ui/                     # Shared components
│   ├── widgets/               # Banking widgets
│   ├── hooks/                 # Shared hooks
│   ├── utils/                 # Utilities
│   ├── validations/           # Schemas
│   └── config/                # Configurations
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # DB migrations
├── turbo.json                 # Turborepo config
└── package.json               # Root package.json
```

## 🔐 Authentication

The app uses JWT-based authentication with the following roles:
- **ADMIN** - Full system access
- **CUSTOMER** - Limited to personal data

Default admin credentials (update in production):
- Email: admin@minibank.com
- Password: admin123

## 🗄️ Database Schema

Key entities:
- **Users** - Customer and admin accounts
- **Accounts** - Account balances
- **Transactions** - All financial activities
- **Loans** - Loan management with installments
- **Shares** - Monthly share purchases
- **BorrowerScores** - Credit scoring system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎯 Roadmap

- [ ] Advanced loan calculation algorithms
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Advanced reporting & analytics
- [ ] Mobile app development
- [ ] Multi-language support
- [ ] Advanced security features

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

Built with ❤️ using modern web technologies.
