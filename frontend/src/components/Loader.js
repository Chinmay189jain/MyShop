import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
  return (
    <Spinner
        animation='border'
        role='status'
        style={{width: '30px', height: '30px', margin: 'auto', display: 'block'}}
    >
        <span className='sr-only'>Loading...</span>    
    </Spinner>
  )
}

export default Loader