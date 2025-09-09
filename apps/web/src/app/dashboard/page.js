'use client';

import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  DollarSign, 
  CreditCard, 
  TrendingUp, 
  Star,
  Users,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

export default function DashboardPage() {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Account Balance',
      value: '$12,450.00',
      change: '+2.5%',
      changeType: 'positive',
      icon: DollarSign,
    },
    {
      title: 'Active Loans',
      value: '3',
      change: '1 new',
      changeType: 'neutral',
      icon: CreditCard,
    },
    {
      title: 'Shares Owned',
      value: '24',
      change: '+4 this month',
      changeType: 'positive',
      icon: TrendingUp,
    },
    {
      title: 'Credit Score',
      value: '750',
      change: '+15 points',
      changeType: 'positive',
      icon: Star,
    },
  ];

  const adminStats = [
    {
      title: 'Total Users',
      value: '1,234',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
    },
    {
      title: 'Total Loans',
      value: '$2.5M',
      change: '+8.3%',
      changeType: 'positive',
      icon: CreditCard,
    },
    {
      title: 'Monthly Revenue',
      value: '$45,230',
      change: '+23.1%',
      changeType: 'positive',
      icon: DollarSign,
    },
    {
      title: 'Active Shares',
      value: '5,678',
      change: '+16.2%',
      changeType: 'positive',
      icon: TrendingUp,
    },
  ];

  const recentTransactions = [
    { id: 1, type: 'deposit', amount: 500, description: 'Salary deposit', date: '2024-01-15' },
    { id: 2, type: 'loan_payment', amount: -350, description: 'Loan installment', date: '2024-01-14' },
    { id: 3, type: 'share_purchase', amount: -100, description: 'Monthly shares', date: '2024-01-13' },
  ];

  const displayStats = user?.role === 'ADMIN' ? adminStats : stats;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          {user?.role === 'ADMIN' ? 'Admin Dashboard' : 'Dashboard'}
        </h1>
        <p className="text-gray-600 mt-2">
          {user?.role === 'ADMIN' 
            ? 'Manage your banking operations and monitor system performance.' 
            : 'Monitor your financial activities and manage your banking needs.'
          }
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  {stat.changeType === 'positive' && (
                    <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  )}
                  {stat.changeType === 'negative' && (
                    <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                  )}
                  <span className={
                    stat.changeType === 'positive' ? 'text-green-600' : 
                    stat.changeType === 'negative' ? 'text-red-600' : 
                    'text-gray-600'
                  }>
                    {stat.change}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              Your latest financial activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-2 h-2 rounded-full ${
                      transaction.type === 'deposit' ? 'bg-green-500' :
                      transaction.type === 'loan_payment' ? 'bg-red-500' :
                      'bg-blue-500'
                    }`} />
                    <div>
                      <p className="text-sm font-medium">{transaction.description}</p>
                      <p className="text-xs text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <div className={`text-sm font-medium ${
                    transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount)}
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                View All Transactions
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              {user?.role === 'ADMIN' 
                ? 'Common administrative tasks' 
                : 'Frequently used features'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {user?.role === 'ADMIN' ? (
                <>
                  <Button className="h-20 flex flex-col space-y-2">
                    <CreditCard className="h-6 w-6" />
                    <span className="text-xs">Issue Loan</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col space-y-2">
                    <Users className="h-6 w-6" />
                    <span className="text-xs">Manage Users</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col space-y-2">
                    <DollarSign className="h-6 w-6" />
                    <span className="text-xs">Add Transaction</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col space-y-2">
                    <Star className="h-6 w-6" />
                    <span className="text-xs">Update Scores</span>
                  </Button>
                </>
              ) : (
                <>
                  <Button className="h-20 flex flex-col space-y-2">
                    <CreditCard className="h-6 w-6" />
                    <span className="text-xs">Apply Loan</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col space-y-2">
                    <TrendingUp className="h-6 w-6" />
                    <span className="text-xs">Buy Shares</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col space-y-2">
                    <DollarSign className="h-6 w-6" />
                    <span className="text-xs">View Transactions</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col space-y-2">
                    <Star className="h-6 w-6" />
                    <span className="text-xs">Check Score</span>
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
