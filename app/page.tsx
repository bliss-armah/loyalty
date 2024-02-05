'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import {signIn} from "next-auth/react"
import Navbar from '@/components/Navbar'


const page = () => {
  return (
    <main >
        <Navbar />
    </main>)
}

export default page