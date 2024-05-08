import React, { useContext } from 'react'
import { RegisterContext } from '../context/RegisterContext'

// cara menggunakan isi context = pake useContext


// const Heading = () => {
//   const registerContext = useContext(RegisterContext)
//   return (
//     <h1>{registerContext.title}</h1>
//   )
// }

class Heading extends React.Component {
  // contextType =  dari class React.Component
  // nilai dari contextType akan dimasukan ke this.context
static contextType = RegisterContext

  render() {
    return <h1>{this.context.title}</h1>
  }
}

export default Heading