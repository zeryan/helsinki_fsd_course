// We import the React library and the useState hook from 'react'
import React, { useState } from 'react'

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>
}


// The StatisticLine component is a row of a table. It receives a text for the label and a value. 
// If the value is not a number, it presents it directly, otherwise, it formats it to have up to 
//2 decimal digits. This component is used in the Statistics component below.

const StatisticLine = ({ text, value }) => {
// a <p> tag (paragraph tag) is not valid inside a <tbody> tag. 
// I used a <tr> (table row) and <td> (table data) instead, or 
// <th> (table header) tags inside a <tbody> tag.

  return (
    <tr>
      <td>{text}</td>
      <td>{isNaN(value) ? value : value.toFixed(2)}</td>
    </tr>
  )
}

// The Statistics component renders a HTML table with the statistics of the feedback.
// It calculates the total, average, and percentage of positive feedback.
// If no feedback has been given yet, it shows a different message.
const Statistics = ({good, neutral, bad}) => {
  const total = (good + neutral + bad);
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  if (total === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="average" value={average}/>
          <StatisticLine text="positive" value={positive}/>
        </tbody>
      </table>
    </>
  )
}

// This is our main component, App. It renders buttons for each type of feedback and  
// the statistics of the feedback. It uses useState to keep track of the count for each type of feedback.
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App;