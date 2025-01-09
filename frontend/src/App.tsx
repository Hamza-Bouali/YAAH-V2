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
import Login from './pages/Login';
import PatientDashboard from './pages/PatientDashboard'; // Import the PatientDashboard component
; // Import the MedicalDashboard component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="patients" element={<Patients />} />
          <Route path="telemedicine" element={<Telemedicine />} />
          <Route path="prescriptions" element={<Prescriptions />} />
          <Route path="billing" element={<Billing />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="messages" element={<Messages />} />
          <Route path="settings" element={<Settings />} />
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;