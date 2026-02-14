import React, { useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    subject: "",
    credits: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCourses([...courses, form]);
    setForm({ name: "", description: "", subject: "", credits: "" });
  };

  return (
    <div>
      <h2>Welcome to Xavier Institute</h2>

      <h2>Add a Course</h2>
      <form onSubmit={handleSubmit}>
        <input id="name" placeholder="Course Name" value={form.name} onChange={handleChange} required />
        <textarea id="description" placeholder="Description" value={form.description} onChange={handleChange} required />
        <input id="subject" placeholder="Subject Area" value={form.subject} onChange={handleChange} required />
        <input id="credits" type="number" placeholder="Credits" value={form.credits} onChange={handleChange} required />
        <button type="submit">Add Course</button>
      </form>

      <h2>All Courses</h2>
      {courses.map((course, index) => (
        <div key={index} className="course">
          <h3>{course.name}</h3>
          <p>{course.description}</p>
          <p><strong>Subject:</strong> {course.subject}</p>
          <p><strong>Credits:</strong> {course.credits}</p>
        </div>
      ))}
    </div>
  );
}

export default Courses;
