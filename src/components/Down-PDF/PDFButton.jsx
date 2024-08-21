// eslint-disable-next-line no-unused-vars
import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PropTypes from 'prop-types';
import './PDFButton.css'; // Import CSS for styling

// eslint-disable-next-line no-empty-pattern
const PDFButton = ({ }) => {
  const generatePDF = () => {
    const input = document.getElementById('student-list');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('student-list.pdf');
    });
  };

  return (
    <button onClick={generatePDF} className="pdf-button">Download PDF</button>
  );
};

PDFButton.propTypes = {
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
};

export default PDFButton;
