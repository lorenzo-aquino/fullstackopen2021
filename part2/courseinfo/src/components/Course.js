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

export default Course;