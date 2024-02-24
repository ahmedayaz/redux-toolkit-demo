import React from 'react'
import { useSelector } from 'react-redux'

const AnotherComponent = () => {
  const count = useSelector((state) => state.counter.value)
  return (
    <div>Display Component has Count {count}</div>
  )
}

export default AnotherComponent