import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Income from './components/Income';
import Expenses from './components/Expenses';
import Budgets from './components/Budgets';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'income':
        return <Income />;
      case 'expenses':
        return <Expenses />;
      case 'budgets':
        return <Budgets />;
      case 'categories':
        return <div className="p-8 text-center text-gray-600">Categories management coming soon...</div>;
      case 'recurring':
        return <div className="p-8 text-center text-gray-600">Recurring transactions coming soon...</div>;
      case 'analytics':
        return <div className="p-8 text-center text-gray-600">Advanced analytics coming soon...</div>;
      case 'cards':
        return <div className="p-8 text-center text-gray-600">Payment cards management coming soon...</div>;
      case 'settings':
        return <div className="p-8 text-center text-gray-600">Settings panel coming soon...</div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="ml-64 p-8">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;