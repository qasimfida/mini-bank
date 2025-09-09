'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function LoansPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Loans</h1>
        <p className="text-gray-600 mt-2">
          Manage your loan applications and track repayments.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Loan Management</CardTitle>
          <CardDescription>
            Apply for loans and track your existing ones
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-500 py-8">
            Loan management features coming soon...
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
