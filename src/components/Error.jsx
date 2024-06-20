import React from 'react'
import {useRouteError} from 'react-router-dom'
const Error = () => {
    let error = useRouteError()
  return (
    <div>
      The Error is {error.data}
    </div>
  )
}

export default Error
