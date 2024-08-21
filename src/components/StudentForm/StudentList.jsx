// import React from 'react';
import PropTypes from 'prop-types';
import './StudentList.css';

const StudentList = ({ students, onDelete, onEdit }) => {
  return (
    <div id="student-list" className="student-list">
      <h2 className="title">Students Data List</h2>
      {students.length > 0 ? (
        <div className="grid">
          {students.map((student, index) => (
            <div key={index} className="card">
              <h3>{student.name}</h3>
              <p>Roll No: {student.rollNo}</p>
              <p>Father Name: {student.fatherName}</p>
              <p>CNIC: {student.cnic}</p>
              <p>Phone: {student.phone}</p>
              <p>Class: {student.class}</p>
              <button onClick={() => onEdit(index)} className="edit-button">Edit</button>
              <button onClick={() => onDelete(index)} className="delete-button">Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No students available</p>
      )}
    </div>
  );
};

StudentList.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rollNo: PropTypes.string.isRequired,
      fatherName: PropTypes.string.isRequired,
      cnic: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      class: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default StudentList;
