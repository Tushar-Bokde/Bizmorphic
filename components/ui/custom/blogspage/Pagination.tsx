import React from 'react'
import { Button } from '../../button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Pagination = () => {
  return (
    <div className=' p-4 w-full'>
        <div className='flex justify-around'>
        <div>
            <Button variant='ghost'>
            <ChevronLeft />
                Previous
            </Button>
        </div>
        <div>
            <Button variant='ghost' >
                Next
                <ChevronRight/>
            </Button>
        </div>
        </div>
    </div>
  )
}

export default Pagination