'use client'


import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'


const Nav = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link />
    </nav>
  )
}

export default Nav