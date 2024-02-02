'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import {signIn} from "next-auth/react"


const page = () => {
  return (
    <main className='flex min-h-screen justify-center items-center '>
        <Button onClick={() => signIn()}>Sign In</Button>
    </main>)
}

export default page