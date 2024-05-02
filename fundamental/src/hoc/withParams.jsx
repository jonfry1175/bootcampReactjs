import React from 'react'
import { useParams } from 'react-router-dom'

const withParams = (InnerComponent) => {
  const WrapperComponent = (props) => {
    const params = useParams()
    return (
      <InnerComponent {...props} params={params} />
    )
  }
  return WrapperComponent
}

export default withParams