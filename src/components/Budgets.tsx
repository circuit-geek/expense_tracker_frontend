import React, { useState } from 'react';
import { Plus, Target, AlertTriangle, CheckCircle, Calendar } from 'lucide-react';

const Budgets = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const budgetData = [
    { 
      id: 1, 
      category: 'Food & Dining', 
      budgetAmount: 600, 
      spentAmount: 450, 
      period: 'Monthly',
      startDate: '2025-01-01',
      endDate: '2025-01-31',
      status: 'On Track'
    },
    { 
      id: 2, 
      category: 'Transportation', 
      budgetAmount: 300, 
      spentAmount: 180, 
      period: 'Monthly',
      startDate: '2025-01-01',
      endDate: '2025-01-31',
      status: 'On Track'
    },
    { 
      id: 3, 
      category: 'Entertainment', 
      budgetAmount: 200, 
      spentAmount: 120, 
      period: 'Monthly',
      startDate: '2025-01-01',
      endDate: '2025-01-31',
      status: 'On Track'
    },
    { 
      id: 4, 
      category: 'Shopping', 
      budgetAmount: 400, 
      spentAmount: 340, 
      period: 'Monthly',
      startDate: '2025-01-01',
      endDate: '2025-01-31',
      status: 'Warning'
    },
    { 
      id: 5, 
      category: 'Bills & Utilities', 
      budgetAmount: 550, 
      spentAmount: 520, 
      period: 'Monthly',
      startDate: '2025-01-01',
      endDate: '2025-01-31',
      status: 'Critical'
    },
    { 
      id: 6, 
      category: 'Healthcare', 
      budgetAmount: 150, 
      spentAmount: 75, 
      period: 'Monthly',
      startDate: '2025-01-01',
      endDate: '2025-01-31',
      status: 'On Track'
    }
  ];

  const totalBudget = budgetData.reduce((sum, budget) => sum + budget.budgetAmount, 0);
  const totalSpent = budgetData.reduce((sum, budget) => sum + budget.spentAmount, 0);
  const remainingBudget = totalBudget - totalSpent;

  const getStatusColor = (budget: any) => {
    const percentage = (budget.spentAmount / budget.budgetAmount) * 100;
    if (percentage >= 95) return 'text-red-600 bg-red-100';
    if (percentage >= 80) return 'text-yellow-600 bg-yellow-100';
    return 'text-green-600 bg-green-100';
  };

  const getProgressColor = (budget: any) => {
    const percentage = (budget.spentAmount / budget.budgetAmount) * 100;
    if (percentage >= 95) return 'bg-red-500';
    if (percentage >= 80) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStatusIcon = (budget: any) => {
    const percentage = (budget.spentAmount / budget.budgetAmount) * 100;
    if (percentage >= 95) return <AlertTriangle className="w-4 h-4" />;
    if (percentage >= 80) return <AlertTriangle className="w-4 h-4" />;
    return <CheckCircle className="w-4 h-4" />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Budget Management</h1>
          <p className="text-gray-600 mt-1">Set and track your spending limits</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Create Budget</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Budget</p>
              <p className="text-2xl font-bold text-blue-600">${totalBudget.toFixed(2)}</p>
            </div>
            <Target className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Spent</p>
              <p className="text-2xl font-bold text-red-600">${totalSpent.toFixed(2)}</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Remaining</p>
              <p className="text-2xl font-bold text-green-600">${remainingBudget.toFixed(2)}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Budget Usage</p>
              <p className="text-2xl font-bold text-purple-600">{((totalSpent / totalBudget) * 100).toFixed(1)}%</p>
            </div>
            <Calendar className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Budget Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {budgetData.map((budget) => {
          const percentage = (budget.spentAmount / budget.budgetAmount) * 100;
          const remaining = budget.budgetAmount - budget.spentAmount;
          const daysRemaining = Math.ceil((new Date(budget.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
          
          return (
            <div key={budget.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{budget.category}</h3>
                <span className={`px-2 py-1 text-xs font-medium rounded-full flex items-center space-x-1 ${getStatusColor(budget)}`}>
                  {getStatusIcon(budget)}
                  <span>{budget.status}</span>
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Spent</span>
                  <span className="font-medium">${budget.spentAmount.toFixed(2)} / ${budget.budgetAmount.toFixed(2)}</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-300 ${getProgressColor(budget)}`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Remaining</span>
                  <span className={`font-medium ${remaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ${remaining.toFixed(2)}
                  </span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Period</span>
                  <span className="font-medium">{budget.period}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Days Remaining</span>
                  <span className="font-medium">{daysRemaining} days</span>
                </div>
              </div>
              
              <div className="flex space-x-2 mt-4 pt-4 border-t border-gray-200">
                <button className="flex-1 px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors duration-200">
                  Edit
                </button>
                <button className="flex-1 px-3 py-2 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors duration-200">
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Create Budget Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h2 className="text-xl font-semibold mb-4">Create New Budget</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>Food & Dining</option>
                  <option>Transportation</option>
                  <option>Entertainment</option>
                  <option>Shopping</option>
                  <option>Bills & Utilities</option>
                  <option>Healthcare</option>
                  <option>Travel</option>
                  <option>Education</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Budget Amount</label>
                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="0.00" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Period</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>Monthly</option>
                  <option>Weekly</option>
                  <option>Quarterly</option>
                  <option>Yearly</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                  <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label className="ml-2 block text-sm text-gray-900">Send alerts when approaching limit</label>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  Create Budget
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Budgets;