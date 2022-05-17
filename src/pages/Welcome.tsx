import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const Welcome = (props: Props) => {
  return (
    <div className='container m-auto p-3'>
        <Link to="my-portfolio" className='btn btn-primary'>Go to</Link>
    </div>
  )
}

export default Welcome