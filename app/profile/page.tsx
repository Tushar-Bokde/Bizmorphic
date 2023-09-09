'use client'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { Button } from '../../components/ui/button'
import Link from 'next/link'
import routes from '../utils/routes'
import { Card, Container } from '@radix-ui/themes'

const Profile = () => {
    const {data: session} = useSession()
    const [blogs, setBlogs] = useState<Array<any>>([])
    useEffect(()=>{ 
     
    },[])

    async function getD() {
      const data = await routes.BLOG_MS.APIS.GET_BLOGS_BY_USERNAME({name :session?.user?.name})
      setBlogs(data)
      }
  getD()
  return (
<>
    <div>{session?.user?.name}</div>
    <>edit profile</>
    <Button variant="outline"><Link href='/blog-writer' >Create Blog</Link></Button>
    <></>
    
    <Container>
      {
        blogs.map((e)=>{
         return (
          <><Card>
          {e.name}
          {e.title}
          {e.createdOn} 
                    <Button variant='outline'
                  >Edit</Button>
               <Button variant='ghost'>
                  Delete
                </Button> 
          </Card>
          </>
          
         )}
        )
      }
    </Container>
    </>
  )
}

export default Profile