import { useState } from 'react';
import StudentList from '../StudentForm/StudentList';
import StudentForm from '../StudentForm/StudentForm';
import { useAuth } from '../Auth/AuthContext';
import PDFButton from '../Down-PDF/PDFButton';
import DashboardData from '../Dashbord/DashboardData'
import './Dashboard.css';

const Dashboard = () => {
  const { logout } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [search, setSearch] = useState('');

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => {
    setShowForm(false);
    setCurrentStudent(null); // Reset the current student when closing the form
  };

  const handleAddStudent = (student) => {
    if (currentStudent !== null) {
      setStudents((prevStudents) => 
        prevStudents.map((s, index) =>
          index === currentStudent ? student : s
        )
      );
    } else {
      setStudents((prevStudents) => [...prevStudents, student]);
    }
    handleCloseForm();
  };

  const handleDeleteStudent = (index) => {
    setStudents((prevStudents) => prevStudents.filter((_, i) => i !== index));
  };

  const handleEditStudent = (index) => {
    setCurrentStudent(index);
    setShowForm(true);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredStudents = students.filter(
    (student) => student.phone.includes(search)
  );

  return (
    <div className="dashboard">
      <button className="logout-button" onClick={logout}>Logout</button>
      <h2 className="title">Student Manager</h2>

      <nav className="nav-links">
        <button onClick={handleOpenForm} className="nav-link">Add Student</button>
        <div className="search">
          <input
            className="searchbr"
            type="text"
            placeholder="Search by Phone No."
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <PDFButton students={students} />
        <DashboardData />
      </nav>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
          <button className="close-modal" onClick={handleCloseForm}>X</button>
            <StudentForm 
              onSubmit={handleAddStudent}
              student={currentStudent !== null ? students[currentStudent] : null}
            />

          </div>
        </div>
      )}
      
      <StudentList 
        students={filteredStudents} 
        onDelete={handleDeleteStudent} 
        onEdit={handleEditStudent} 
      />
    </div>
  );
};

export default Dashboard;
