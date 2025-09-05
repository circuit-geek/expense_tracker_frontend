import React from 'react';
import { TrendingUp, TrendingDown, Target, PiggyBank, AlertCircle, Lightbulb, BarChart3, PieChart } from 'lucide-react';

const Dashboard = () => {
  const summaryCards = [
    {
      title: 'Total Income',
      value: '$5,847.32',
      change: '+12.5%',
      positive: true,
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      title: 'Total Expenses',
      value: '$3,421.18',
      change: '+8.2%',
      positive: false,
      icon: TrendingDown,
      color: 'text-red-600'
    },
    {
      title: 'Total Savings',
      value: '$2,426.14',
      change: '+18.3%',
      positive: true,
      icon: PiggyBank,
      color: 'text-blue-600'
    },
    {
      title: 'Budget Used',
      value: '68.4%',
      change: '31.6% remaining',
      positive: true,
      icon: Target,
      color: 'text-purple-600'
    }
  ];

  const recentTransactions = [
    { id: 1, description: 'Salary Deposit', amount: '+$3,200.00', category: 'Income', date: '2025-01-15', type: 'income' },
    { id: 2, description: 'Grocery Shopping', amount: '-$127.48', category: 'Food', date: '2025-01-14', type: 'expense' },
    { id: 3, description: 'Freelance Project', amount: '+$850.00', category: 'Income', date: '2025-01-13', type: 'income' },
    { id: 4, description: 'Utility Bills', amount: '-$245.67', category: 'Bills', date: '2025-01-12', type: 'expense' },
    { id: 5, description: 'Coffee Shop', amount: '-$12.45', category: 'Food', date: '2025-01-11', type: 'expense' }
  ];

  const budgetProgress = [
    { category: 'Food & Dining', spent: 450, budget: 600, percentage: 75 },
    { category: 'Transportation', spent: 180, budget: 300, percentage: 60 },
    { category: 'Entertainment', spent: 120, budget: 200, percentage: 60 },
    { category: 'Shopping', spent: 340, budget: 400, percentage: 85 },
    { category: 'Bills & Utilities', spent: 520, budget: 550, percentage: 95 }
  ];

  return (
    <div className="space-y-6">
      {/* AI Insights Section - Future LLM Integration */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
        <div className="flex items-start space-x-3">
          <Lightbulb className="w-6 h-6 text-blue-600 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">AI Financial Insights</h3>
            <p className="text-blue-800 mb-3">
              Based on your spending patterns, you're on track to save $2,890 this month. Consider allocating 15% more to your emergency fund.
            </p>
            <div className="flex space-x-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Smart Suggestion</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Savings Opportunity</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${card.color} bg-opacity-10`}>
                  <Icon className={`w-6 h-6 ${card.color}`} />
                </div>
                <span className={`text-sm font-medium ${card.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {card.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{card.value}</h3>
              <p className="text-gray-600 text-sm">{card.title}</p>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Transactions */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Recent Transactions</h2>
            <button className="text-blue-600 hover:text-blue-800 font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {transaction.type === 'income' ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{transaction.description}</p>
                    <p className="text-sm text-gray-600">{transaction.category} • {transaction.date}</p>
                  </div>
                </div>
                <span className={`font-semibold ${
                  transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Progress */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Budget Progress</h2>
          <div className="space-y-6">
            {budgetProgress.map((budget, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{budget.category}</span>
                  <span className="text-sm text-gray-600">${budget.spent}/${budget.budget}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${
                      budget.percentage > 90 ? 'bg-red-500' : 
                      budget.percentage > 75 ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${budget.percentage}%` }}
                  ></div>
                </div>
                {budget.percentage > 90 && (
                  <div className="flex items-center mt-1">
                    <AlertCircle className="w-4 h-4 text-red-500 mr-1" />
                    <span className="text-xs text-red-600">Near budget limit</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Monthly Spending Trend</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Chart visualization would go here</p>
              <p className="text-sm text-gray-500">Ready for chart.js or similar integration</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Category Breakdown</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <PieChart className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Pie chart visualization would go here</p>
              <p className="text-sm text-gray-500">Ready for chart.js or similar integration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;