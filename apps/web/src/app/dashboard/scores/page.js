'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ScoresPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Borrower Score</h1>
        <p className="text-gray-600 mt-2">
          Track your borrower score and see how it's calculated.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Score Tracking</CardTitle>
          <CardDescription>
            Monitor your creditworthiness and borrower rating
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-500 py-8">
            Score tracking features coming soon...
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
