import { useState } from 'react'

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onSmash, text }) => <button onClick={onSmash}>{text}</button>

const App = () => {
  const [left, setLeft] = useState(0)
  console.log("rendering with left counter:",left)
  const [right, setRight] = useState(0)
  console.log("rendering with right counter:",right)
  const [allClicks, setAll] = useState([])
  console.log("rendering with allClick counter:",allClicks)
  const [total, setTotal] = useState(0)
  console.log("rendering with total counter:",total)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right) 
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(updatedRight + left) 
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
      <p>total {total}</p>
    </div>
  )
}

export default App