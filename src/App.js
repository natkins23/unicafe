import React, { useState } from 'react'
const Header = (prop) => {
  return (
    <>
      <h1>{prop.text}</h1>
    </>
  )
}

const Button = (prop) => {
  return (
    <>
      <button onClick={prop.increment}>{prop.text}</button>
    </>
  )
}
const Stats = (prop) => {
  return (
    <>
      <div>
        {prop.text}: {prop.count}
      </div>
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      1.6
      <Header text='give feedback' />
      <Button increment={() => setGood(good + 1)} text='good' />
      <Button increment={() => setNeutral(neutral + 1)} text='neutral' />
      <Button increment={() => setBad(bad + 1)} text='bad' />
      <Header text='statistics' />
      <Stats count={good} text='good' />
      <Stats count={neutral} text='neutral' />
      <Stats count={bad} text='bad' />
    </>
  )
}

export default App
