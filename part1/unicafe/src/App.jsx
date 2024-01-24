import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  console.log("rendering good:",good)

  const [neutral, setNeutral] = useState(0)
  console.log("rendering neutral:",neutral)

  const [bad, setBad] = useState(0)
  console.log("rendering bad:",bad)

  const [total, setTotal] = useState(0)
  console.log("rendering total:",total)

  const [average, setAverage] = useState(0);
  console.log("rendering average:",average)

  const [positive, setPositive] = useState(0);
  console.log("rendering positive:",positive)


  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)

    const updatedTotal = total + 1
    setTotal(updatedTotal)

    const updatedAverage = ((good - bad) / total || 0)
    setAverage(updatedAverage)

    const updatedPositive = (good / total * 100 || 0)
    setPositive(updatedPositive)

  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)

    const updatedTotal = total + 1
    setTotal(updatedTotal)

    const updatedAverage = ((good - bad) / total || 0)
    setAverage(updatedAverage)

    const updatedPositive = (good / total * 100 || 0)
    setPositive(updatedPositive)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)

    const updatedTotal = total + 1
    setTotal(updatedTotal)

    const updatedAverage = ((good - bad) / total || 0)
    setAverage(updatedAverage)

    const updatedPositive = (good / total * 100 || 0)
    setPositive(updatedPositive)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
      <p>average {average.toFixed(2)}</p>
      <p>positive {positive.toFixed(2)}%</p>
      </div>
    </div>
  )
}


export default App