// Course.js

import React from 'react';

// Header component
const Header = ({ courseName }) => {
  return <h2>{courseName}</h2>;
};

// Part component
const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

// Content component
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

// Course component
const Course = ({ course }) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div className="course">
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <p>Total of exercises: {total}</p>
    </div>
  );
};

export default Course;