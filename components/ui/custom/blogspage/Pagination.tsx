import React from 'react'
import { Button } from '../../button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Pagination = (props:any) => {

    const { setPage, page} = props

    function handlePagePrevious(){
        setPage((prev:number) => prev + 1)
    }
    function handlePageNext(){
        (page === 1 )? alert('Already on First Page') :
        setPage((prev:number) => prev - 1)
    }
  return (
    <div className=' p-4 w-full'>
        <div className='flex justify-around'>
        <div>
            <Button variant='ghost'
            onClick={handlePagePrevious}>
            <ChevronLeft />
                Previous
            </Button>
        </div>
        <div>
            <Button variant='ghost' 
             onClick={handlePageNext}>
                Next
                <ChevronRight/>
            </Button>
        </div>
        </div>
    </div>
  )
}

export default Pagination