import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import Patients from './pages/Patients';
import Telemedicine from './pages/Telemedicine';
import Prescriptions from './pages/Prescriptions';
import Billing from './pages/Billing';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import ProtectedRoute from './components/ProtectedRoute.tsx'; // Import the ProtectedRoute component
import AccountantPage from './pages/AccountantPage'; // Import the AccountantPage
import Login from './pages/Login'; // Import the Login page

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

 

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProtectedRoute component={Dashboard} isAuthenticated={isAuthenticated} />} />
        <Route path="appointments" element={<ProtectedRoute component={Appointments} isAuthenticated={isAuthenticated} />} />
        <Route path="patients" element={<ProtectedRoute component={Patients} isAuthenticated={isAuthenticated} />} />
        <Route path="telemedicine" element={<ProtectedRoute component={Telemedicine} isAuthenticated={isAuthenticated} />} />
        <Route path="prescriptions" element={<ProtectedRoute component={Prescriptions} isAuthenticated={isAuthenticated} />} />
        <Route path="billing" element={<ProtectedRoute component={Billing} isAuthenticated={isAuthenticated} />} />
        <Route path="notifications" element={<ProtectedRoute component={Notifications} isAuthenticated={isAuthenticated} />} />
        <Route path="messages" element={<ProtectedRoute component={Messages} isAuthenticated={isAuthenticated} />} />
        <Route path="settings" element={<ProtectedRoute component={Settings} isAuthenticated={isAuthenticated} />} />
        <Route path="dashboard" element={<ProtectedRoute component={Dashboard} isAuthenticated={isAuthenticated} />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
      <Route path="accountant" element={<ProtectedRoute component={AccountantPage} isAuthenticated={isAuthenticated} />} />
      <Route path="login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </Router>
  );
}

export default App;