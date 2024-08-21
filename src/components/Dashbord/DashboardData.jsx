// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from 'react-router-dom';
import './DashboardData.css'; // Import CSS for styling

// eslint-disable-next-line no-empty-pattern
const DashboardData = ({ }) => {
  return (
    <Link to='/student-dashboard' className="dashboard-button">Dashboard</Link>
  );
};


export default DashboardData;
