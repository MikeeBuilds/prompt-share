"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';


const Nav = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/" className='flex gap-2 flex-center' >
        <Image
          src="/assets/images/logo.svg"
          alt="Promptopia Logo"
          width={30}
          height={30}
        />
        <p className='logo-text'>
          Promptopia
        </p>
      </Link>

      {/* Mobile Navigation*/}
      <div className='flex-center flex-col max-md:hidden'>
        <Link href="/create" className='flex gap-2 flex-center' >
          <Image
            src="/assets/images/plus.svg"
            alt="Create Prompt"
            width={30}
            height={30}
          />
          <p className='logo-text'>
            Create
          </p>
        </Link>
        <Link href="/feed" className='flex gap-2 flex-center' >
          <Image
            src="/assets/images/feed.svg"
            alt="Feed"
            width={30}
            height={30}
          />
          <p className='logo-text'>
            Feed
          </p>
        </Link>
        <Link href="/profile" className='flex gap-2 flex-center' >
          <Image
            src="/assets/images/profile.svg"
            alt="Profile"
            width={30}
            height={30}
          />
          <p className='logo-text'>
            
    </nav>
  )
}

export default Nav