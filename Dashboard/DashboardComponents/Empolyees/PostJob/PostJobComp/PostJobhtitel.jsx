import React from 'react'
import { Link } from 'react-router-dom'

const PostJobhtitel = () => {
  
  return (
    <div className='flex justify-between mt-6 flex-wrap  ' >
    <div >
      <span className='text-3xl ml-4' >Create a job post</span>
    </div>
    <div className='flex justify-evenly' >
      <Link className='text-xl text-divyang mt-2 mr-2' >Cancel  </Link>
      <Link className='border-2 text-xl p-2 rounded-3xl bg-divyang ml-4 text-white' >Post a Job</Link>
    </div>
    <div>
    </div>
  </div>
  )
}

export default PostJobhtitel