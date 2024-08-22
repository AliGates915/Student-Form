// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../src/components/Auth/AuthContext';
import Login from '../src/components/Auth/Login';
import Dashboard from '../src/components/Dashbord/Dashboard';
import PrivateRoute from '../src/components/Routes/PrivateRoute';
import ChartBg from './components/Chart/ChartBg';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>} 
          />
          <Route path='/student-dashboard' element = {<ChartBg />}/>
        </Routes>
        
      </Router>
    </AuthProvider>
  );
}

export default App;
