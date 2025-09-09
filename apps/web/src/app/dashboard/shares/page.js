'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SharesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Shares</h1>
        <p className="text-gray-600 mt-2">
          Purchase and manage your monthly shares.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Share Management</CardTitle>
          <CardDescription>
            Buy monthly shares to improve your borrower score
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-500 py-8">
            Share management features coming soon...
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
