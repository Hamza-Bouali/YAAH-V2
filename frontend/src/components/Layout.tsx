import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  VideoIcon, 
  FileText, 
  Bell, 
  CreditCard,
  Activity,
  MessageSquare,
  Settings
} from 'lucide-react';

const navItems = [
  { icon: Calendar, text: 'Appointments', path: '/appointments' },
  { icon: Users, text: 'Patients', path: '/patients' },
  { icon: VideoIcon, text: 'Telemedicine', path: '/telemedicine' },
  { icon: FileText, text: 'Prescriptions', path: '/prescriptions' },
  { icon: CreditCard, text: 'Billing', path: '/billing' },
  { icon: Bell, text: 'Notifications', path: '/notifications' },
  { icon: MessageSquare, text: 'Messages', path: '/messages' },
  { icon: Settings, text: 'Settings', path: '/settings' }
];

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed w-64 h-full bg-white shadow-lg">
        <div 
          className="flex items-center p-4 border-b cursor-pointer" 
          onClick={() => navigate('/')}
        >
          <Activity className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-semibold text-gray-800">MedOffice</span>
        </div>
        <nav className="p-4">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`flex items-center w-full p-3 mt-1 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="ml-3">{item.text}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;