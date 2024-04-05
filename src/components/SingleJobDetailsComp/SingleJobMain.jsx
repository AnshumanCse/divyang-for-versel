import React from 'react'
import RightSideCard from './RightSideCard'
import LeftSideJobDetails from './LeftSideJobDetails'

const SingleJobMain = () => {
    return (
        <div className='flex justify-around p-5 gap-5 flex-wrap lg:flex-nowrap '>
            <div className=''>

                <LeftSideJobDetails />
            </div>
            <div>
                <RightSideCard />
            </div>
        </div>
    )
}

export default SingleJobMain