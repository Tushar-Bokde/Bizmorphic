import React from 'react'
import { Button } from '../../button';

const Categories = () => {
const categories = [
    "Startup",
'Life',
'Life Lessons' ,
'Politics' ,
'Travel' ,
'Poetry ',
'Entrepreneurship' ,'Education ',
'Health ',
'Love' ,
'Design' ,
'Writing ',
'Technology' ,
'Self Improvement' ,
'Business' ,
'Music' ,
'Social Media' ,
'Sports' ,
'Food ',
'Art '
]

  return (
    <div>
          <ul className="filter-list flex flex-wrap py-4  justify-center">
              {categories.map((e: string, i: number) => {
                return (
                  <>
                    <li key={i} className="p-1">
                      <Button
                        variant={"outline"}
                        // onClick={() => {
                        //   setProduct(e);
                        // }}
                        className="filter-btn p-4 active"
                        data-filter-btn
                      >
                        {e}
                      </Button>
                    </li>
                  </>
                );
              })}
            </ul>
    </div>
  )
}

export default Categories