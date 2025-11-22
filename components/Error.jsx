import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
    const error=useRouteError()
    console.log(error);
  return (
    <h1>{`Info is not coming ${error.status} & ${error.statusText}`}</h1>
  )
}

export default Error