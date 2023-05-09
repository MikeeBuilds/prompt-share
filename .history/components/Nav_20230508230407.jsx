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
    </nav>
  )
}

export default Nav