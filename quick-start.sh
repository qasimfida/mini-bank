#!/bin/bash

echo "Setting up Mini Bank for development..."
echo

# Create .env file
echo "Creating .env file..."
cat > .env << EOF
# Database
DATABASE_URL="file:./dev.db"

# JWT Secret
JWT_SECRET="development-secret-key-change-in-production"

# API Configuration
NODE_ENV="development"
PORT=3001
FRONTEND_URL="http://localhost:3000"

# Next.js Frontend
NEXT_PUBLIC_API_URL="http://localhost:3001"
EOF

echo ".env file created successfully!"
echo

echo "Setting up database..."
cd prisma
npx prisma generate
npx prisma migrate dev --name init
cd ..

echo
echo "Setup complete! You can now run:"
echo "  npm run dev"
echo
echo "Or start apps individually:"
echo "  cd apps/api && npm run dev"
echo "  cd apps/web && npm run dev"
echo
