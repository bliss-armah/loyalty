"use client"
import SignIn from '@/components/Sign'
import { useSession } from 'next-auth/react'
import React from 'react'

const page = () => {
    const session = useSession()
    console.log(session);
  return (
    <div>
        <SignIn/>
    </div>
  )
}

export default page