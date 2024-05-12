import React from 'react'
import Counter from '../components/Counter'
import Footer from '../components/Footer'

const CounterPage = () => {
  return (
    <div>
        <Counter/>
        <Footer message="props message"/>
    </div>
  )
}

export default CounterPage