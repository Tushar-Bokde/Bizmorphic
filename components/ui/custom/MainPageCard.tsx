import React from 'react'
import { Card } from '../card'
import Image from 'next/image'
function MainPageCard({props}) {
  return (
<>
<li className="pt-8"> <Card>
                <div
                  className="service-card  p-6 text-center"
                  style={{ color: "157, 89%, 44%" }}
                >
                  <div className="card-icon p-4 flex justify-center bg-center">
                    <Image
                      src={props.ImageHref}
                      width="30"
                      height="30"
                      loading="lazy"
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