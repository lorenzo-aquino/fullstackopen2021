import React from 'react'

const Course = ({ course }) => (
  <>
    <Header text={course.name}/>
    <Content parts={course.parts}/>
  </>
)

const Header = ({ text }) => (
  <h1>{text}</h1>
)

const Content = ({ parts }) => (
  <>
    {parts.map(part => 
    <Part key={part.id} part={part}/>)}
    <Total parts={parts}/>
  </>
)

const Part = ({ part }) => (
  <p>{part.name} {part.exercises}</p>
)

const Total = ({ parts }) => (
  <p>total of {parts.reduce( (total, part) => total + part.exercises, 0)} exercises</p>
)

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
  }

  return <Course course={course} />
}

export default App;
