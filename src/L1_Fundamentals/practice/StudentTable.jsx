import React from "react";

const StudentTable = () => {
  // Sample data representing student grades
  const studentData = [
    { id: 1, name: "Alice", subject: "Math", grade: "A" },
    { id: 2, name: "Bob", subject: "Science", grade: "B" },
    { id: 3, name: "Charlie", subject: "History", grade: "A-" },
    { id: 4, name: "Diana", subject: "English", grade: "B+" },
    { id: 5, name: "Edward", subject: "Math", grade: "C" },
  ];

  // Function to apply conditional styling based on grade
  const getGradeClass = (grade) => {
    if (["A", "A-"].includes(grade)) return "bg-success text-white";
    if (["B", "B+"].includes(grade)) return "bg-info text-white";
    if (grade === "C") return "bg-warning text-dark";
    return "";
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Student Grades</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th >ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.subject}</td>
              <td className={getGradeClass(student.grade)}>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
