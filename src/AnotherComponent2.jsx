import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { increment } from './features/counter/counterSlice'

const AnotherComponent2 = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>Dislay and Dispatch Component has Count {count} and <button onClick={() => dispatch(increment())}>Add</button></div>
  )
}

export default AnotherComponent2