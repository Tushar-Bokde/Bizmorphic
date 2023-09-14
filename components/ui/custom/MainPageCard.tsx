import React from 'react'
import { Card } from '../card'
import Image from 'next/image'
function MainPageCard({props}:any) {
  const possible = [
    'bg-green-100', 
    'bg-purple-100', 
    'bg-organge-100',  
    'bg-blue-100', 
    'bg-yellow-100', 
    'bg-orange-100',  
  ]
  return (
<>
<li className="pt-8 hover:drop-shadow-lg "> <Card>
                <div
                  className="service-card group p-6 text-center"
                  style={{ color: "157, 89%, 44%" }}
                >
                  <div className="card-icon p-6 flex justify-center  bg-center">
                    <Image
                      src={props.ImageHref}
                      width="60"
                      height="60"
                      loading="lazy"
                      className={`bg-${props.color}-100  p-4 rounded-lg transition duration-300 group-hover:[transform:rotateY(180deg)] `}
                      alt="service icon"
                    />
                  </div>

                  <h3 className="h3">
                    <a href={ props.href } className="card-title">
                        {props.cardTitle}
                    </a>
                  </h3>
                </div></Card>
              </li>

</>
  )
}

export default MainPageCard