import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentData = () => {
  const [students, setStudents] = useState([]); // State to hold student details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users?page=1");
        setStudents(response.data.data); // Extract the "data" array from response
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch student data. Please try again."); // Set error message
        setLoading(false);
      }
    };

    fetchStudents(); // Trigger the fetch when the component loads
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show a loading indicator
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>; // Show error message
  }

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id} style={{ marginBottom: "20px" }}>
            <img
              src={student.avatar}
              alt={`${student.first_name} ${student.last_name}`}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
            <span>
              <strong>{student.first_name} {student.last_name}</strong> - {student.email}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentData;