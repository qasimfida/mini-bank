import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Check if admin user already exists
  const existingAdmin = await prisma.user.findUnique({
    where: { email: 'admin@minibank.com' }
  });

  if (existingAdmin) {
    console.log('✅ Admin user already exists');
    return;
  }

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12);

  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@minibank.com',
      password: hashedPassword,
      firstName: 'Admin',
      lastName: 'User',
      role: 'ADMIN',
      account: {
        create: {
          balance: 100000
        }
      }
    },
    include: {
      account: true
    }
  });

  console.log('✅ Created admin user:', {
    email: adminUser.email,
    role: adminUser.role,
    balance: adminUser.account.balance
  });

  // Create a test customer
  const customerPassword = await bcrypt.hash('customer123', 12);

  const customerUser = await prisma.user.create({
    data: {
      email: 'customer@minibank.com',
      password: customerPassword,
      firstName: 'John',
      lastName: 'Customer',
      role: 'CUSTOMER',
      account: {
        create: {
          balance: 0
        }
      }
    },
    include: {
      account: true
    }
  });

  console.log('✅ Created customer user:', {
    email: customerUser.email,
    role: customerUser.role,
    balance: customerUser.account.balance
  });

  console.log('\n🎉 Database seeded successfully!');
  console.log('\n📋 Login credentials:');
  console.log('👑 Admin: admin@minibank.com / admin123');
  console.log('👤 Customer: customer@minibank.com / customer123');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
