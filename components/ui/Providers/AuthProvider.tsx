'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react'
interface Props {
    children : React.ReactNode;

}

const AuthProvider = (props : Props) => {
  return (
    <SessionProvider> {props.children}</SessionProvider>
  )
}

export default AuthProvider