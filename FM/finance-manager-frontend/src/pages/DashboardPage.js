// src/pages/DashboardPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  TrendingUp,
  TrendingDown,
  Wallet,
  CreditCard,
  Calendar,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

const DashboardPage = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalIncome: 0,
    totalExpenses: 0,
    balance: 0,
    thisMonth: {
      income: 0,
      expenses: 0,
    },
  });
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data - replace with actual API calls
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          setStats({
            totalIncome: 5250.0,
            totalExpenses: 3420.5,
            balance: 1829.5,
            thisMonth: {
              income: 2500.0,
              expenses: 1800.75,
            },
          });

          setRecentTransactions([
            {
              id: 1,
              type: "expense",
              amount: 25.5,
              category: "Food",
              description: "Lunch at restaurant",
              date: "2024-01-15",
            },
            {
              id: 2,
              type: "income",
              amount: 2500.0,
              category: "Salary",
              description: "Monthly salary",
              date: "2024-01-15",
            },
            {
              id: 3,
              type: "expense",
              amount: 150.0,
              category: "Utilities",
              description: "Electricity bill",
              date: "2024-01-14",
            },
            {
              id: 4,
              type: "expense",
              amount: 80.0,
              category: "Transportation",
              description: "Gas fill-up",
              date: "2024-01-14",
            },
            {
              id: 5,
              type: "income",
              amount: 120.0,
              category: "Freelance",
              description: "Web design project",
              date: "2024-1-13",
            },
          ]);

          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const StatCard = ({
    title,
    amount,
    icon: Icon,
    color,
    trend,
    trendValue,
  }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            ${amount.toFixed(2)}
          </p>
          {trend && (
            <div
              className={`flex items-center mt-2 text-sm ${
                trend === "up" ? "text-green-600" : "text-red-600"
              }`}
            >
              {trend === "up" ? (
                <ArrowUpRight className="h-4 w-4 mr-1" />
              ) : (
                <ArrowDownRight className="h-4 w-4 mr-1" />
              )}
              {trendValue}% from last month
            </div>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );

  const TransactionItem = ({ transaction }) => (
    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-3">
        <div
          className={`p-2 rounded-full ${
            transaction.type === "income" ? "bg-green-100" : "bg-red-100"
          }`}
        >
          {transaction.type === "income" ? (
            <TrendingUp className="h-4 w-4 text-green-600" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-600" />
          )}
        </div>
        <div>
          <p className="font-medium text-gray-900">{transaction.description}</p>
          <p className="text-sm text-gray-500">{transaction.category}</p>
        </div>
      </div>
      <div className="text-right">
        <p
          className={`font-medium ${
            transaction.type === "income" ? "text-green-600" : "text-red-600"
          }`}
        >
          {transaction.type === "income" ? "+" : "-"}$
          {transaction.amount.toFixed(2)}
        </p>
        <p className="text-sm text-gray-500">{transaction.date}</p>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {user?.firstName || "User"}!
          </h1>
          <p className="text-gray-600">Here's your financial overview</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn btn-secondary flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
          <Link
            to="/transactions/new"
            className="btn btn-primary flex items-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Transaction
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Income"
          amount={stats.totalIncome}
          icon={TrendingUp}
          color="bg-green-500"
          trend="up"
          trendValue={12.5}
        />
        <StatCard
          title="Total Expenses"
          amount={stats.totalExpenses}
          icon={TrendingDown}
          color="bg-red-500"
          trend="down"
          trendValue={3.2}
        />
        <StatCard
          title="Current Balance"
          amount={stats.balance}
          icon={Wallet}
          color="bg-blue-500"
          trend="up"
          trendValue={8.1}
        />
      </div>

      {/* Monthly Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            This Month
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Income</span>
              <span className="font-semibold text-green-600">
                +${stats.thisMonth.income.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Expenses</span>
              <span className="font-semibold text-red-600">
                -${stats.thisMonth.expenses.toFixed(2)}
              </span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">Net Income</span>
                <span className="font-bold text-blue-600">
                  $
                  {(stats.thisMonth.income - stats.thisMonth.expenses).toFixed(
                    2
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibizer text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/transactions/new?type=income"
              className="flex items-center p-3 border border-green-200 rounded-lg hover:bg-green-50 transition-colors"
            >
              <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-sm font-medium">Add Income</span>
            </Link>
            <Link
              to="/transactions/new?type=expense"
              className="flex items-center p-3 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
            >
              <TrendingDown className="h-5 w-5 text-red-600 mr-2" />
              <span className="text-sm font-medium">Add Expense</span>
            </Link>
            <Link
              to="/categories"
              className="flex items-center p-3 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <CreditCard className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm font-medium">Categories</span>
            </Link>
            <Link
              to="/reports"
              className="flex items-center p-3 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors"
            >
              <Calendar className="h-5 w-5 text-purple-600 mr-2" />
              <span className="text-sm font-medium">Reports</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Recent Transactions
          </h3>
          <Link
            to="/transactions"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            View all
          </Link>
        </div>

        <div className="space-y-2">
          {recentTransactions.length > 0 ? (
            recentTransactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <CreditCard className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p>No recent transactions</p>
              <Link
                to="/transactions/new"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2 inline-block"
              >
                Add your first transaction
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
