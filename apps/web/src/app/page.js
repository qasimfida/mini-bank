'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in, redirect to dashboard if true
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        router.push('/dashboard');
      }
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Mini Bank</h1>
          <p className="text-lg text-gray-600">Banking Management System</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Welcome to Mini Bank</CardTitle>
            <CardDescription>
              A comprehensive banking platform for managing loans, shares, and transactions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Button 
                onClick={() => router.push('/login')}
                className="w-full"
              >
                Login
              </Button>
              <Button 
                onClick={() => router.push('/register')}
                variant="outline"
                className="w-full"
              >
                Register
              </Button>
            </div>
            
            <div className="pt-4 border-t">
              <h3 className="font-semibold mb-2">Features:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Loan Management & Tracking</li>
                <li>• Share Purchase & Management</li>
                <li>• Borrower Score System</li>
                <li>• Transaction History</li>
                <li>• Admin Dashboard</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}