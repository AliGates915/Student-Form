import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './StudentForm.css';

const StudentForm = ({ onSubmit, student }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [cnic, setCnic] = useState('');
  const [phone, setPhone] = useState('');
  const [className, setClassName] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (student) {
      setName(student.name);
      setRollNo(student.rollNo);
      setFatherName(student.fatherName);
      setCnic(student.cnic);
      setPhone(student.phone);
      setClassName(student.class);
    }
  }, [student]);

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!rollNo.trim()) newErrors.rollNo = 'Roll No is required';
    if (!fatherName.trim()) newErrors.fatherName = 'Father Name is required';
    if (!cnic.trim()) newErrors.cnic = 'CNIC is required';
    if (!phone.trim()) newErrors.phone = 'Phone is required';
    if (!className.trim()) newErrors.className = 'Class is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const studentData = {
      name,
      rollNo,
      fatherName,
      cnic,
      phone,
      class: className,
    };
    
    onSubmit(studentData);
    setName('');
    setRollNo('');
    setFatherName('');
    setCnic('');
    setPhone('');
    setClassName('');
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h3>{student ? 'Edit Student' : 'Add New Student'}</h3>
      
      <label>Name:</label>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      {errors.name && <p className="error">{errors.name}</p>}
      <label>Father Name:</label>
      <input 
        type="text" 
        value={fatherName} 
        onChange={(e) => setFatherName(e.target.value)} 
        required 
      />
      {errors.fatherName && <p className="error">{errors.fatherName}</p>}

      <label>Roll No:</label>
      <input 
        type="text" 
        value={rollNo} 
        onChange={(e) => setRollNo(e.target.value)} 
        required 
      />
      {errors.rollNo && <p className="error">{errors.rollNo}</p>}


      <label>CNIC:</label>
      <input 
        type="text" 
        value={cnic} 
        onChange={(e) => setCnic(e.target.value)} 
        required 
      />
      {errors.cnic && <p className="error">{errors.cnic}</p>}

      <label>Phone:</label>
      <input 
        type="text" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        required 
      />
      {errors.phone && <p className="error">{errors.phone}</p>}

      <label>Class:</label>
      <input 
        type="text" 
        value={className} 
        onChange={(e) => setClassName(e.target.value)} 
        required 
      />
      {errors.className && <p className="error">{errors.className}</p>}

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

StudentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  student: PropTypes.object, // student prop is optional
};

export default StudentForm;
