import React, { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>
const Button = ({handleClick, text}) => <button onClick={handleClick} >{text}</button>
const Statistic = ({text, count}) => <p>{text} {count}</p>

const Statistics = ({stats}) => (
  <div>
    <Statistic text="good" count={stats.good}/>
    <Statistic text="neutral" count={stats.neutral}/>
    <Statistic text="bad" count={stats.bad}/>
    <Statistic text="all" count={stats.all}/>
    <Statistic text="average" count={stats.average}/>
    <Statistic text="positive" count={stats.positive}/>
  </div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [total, setTotal] = useState(0)
  const [positive, setPositive] = useState(0)

  const calculatePositives = () => all ?  positive / all * 100 : 0
  const calculateAverage = () => all ? total / all : 0
  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all,
    average: calculateAverage(),
    positive: calculatePositives() + "%"
  }

  const handle = (type) => {
    setAll(all + 1)
    switch(type) { 
      case 'good':
        setGood(good + 1)
        setTotal(total + 1)
        setPositive(positive + 1)
        break
      case 'neutral':
        setNeutral(neutral + 1)
        setTotal(total)
        setPositive(positive)
        break
      case 'bad':
        setBad(bad + 1)
        setTotal(total - 1)
        setPositive(positive)
        break
      default:
        break
    }
  }

  return (
    <div>
      <Header text="give feedback"/>
      <Button handleClick={() => handle('good')} text="good"/>
      <Button handleClick={() => handle('neutral')} text="neutral"/>
      <Button handleClick={() => handle('bad')} text="bad"/>
      <Header text="statistics"/>
      <Statistics stats={statistics} />
    </div>
  )
}

export default App;
