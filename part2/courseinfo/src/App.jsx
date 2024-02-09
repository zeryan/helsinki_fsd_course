// Title component
const Title = ({}) => {
  return <h1>Web Development Curriculum</h1>;
};


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

// Parent component that renders multiple Course components
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
    // Add more courses here if needed
  ];

  return (
    <div>
      <Title/>
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default App;