'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Users, 
  CreditCard, 
  TrendingUp, 
  Star, 
  DollarSign,
  Settings,
  Shield
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Transactions', href: '/dashboard/transactions', icon: DollarSign },
  { name: 'Loans', href: '/dashboard/loans', icon: CreditCard },
  { name: 'Shares', href: '/dashboard/shares', icon: TrendingUp },
  { name: 'Scores', href: '/dashboard/scores', icon: Star },
];

const adminNavigation = [
  { name: 'Users', href: '/dashboard/users', icon: Users },
  { name: 'Admin Panel', href: '/dashboard/admin', icon: Shield },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export function Sidebar({ user }) {
  const pathname = usePathname();

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 px-4 bg-blue-600">
          <h1 className="text-xl font-bold text-white">Mini Bank</h1>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  isActive
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                )}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            );
          })}
          
          {user?.role === 'ADMIN' && (
            <>
              <div className="border-t my-4"></div>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Admin
              </div>
              {adminNavigation.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                      isActive
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    )}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                );
              })}
            </>
          )}
        </nav>
      </div>
    </div>
  );
}
