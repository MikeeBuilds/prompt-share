"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';



const Nav = () => {
  const isUserLoggedin = true;

  const [providers, setProviders ] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(providers);
    }

    setProviders();
  }, [])


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
      <div className='sm:flex hidden '>
         {isUserLoggedin ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href="/create-prompt" className='black_btn'>
              Create Prompt
            </Link>

            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>


            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                alt="Profile"
                width={37}
                height={37}
                className='rounded-full'
              />
            </Link>
          </div>
         ) : (
          <>
          {providers && 
          Object.values(providers).map((provider) => (
            <button
            type='button'
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className='black_btn'
            >
              Sign in with 
            </button>
          ))}
          </>
         )}
      </div>
      {/* Mobile Navigation*/}
      <div className='sm:hidden flex relative'>
        {isUserLoggedin ? (
          <div className='flex'>
             <Image
                src="/assets/images/logo.svg"
                alt="Profile"
                width={37}
                height={37}
                className='rounded-full'
                onClick={() => setToggleDropdown((prev) => !prev)}
              /> 
              {toggleDropdown && (
                <div>
                  <button type='button' onClick={signOut} className='outline_btn'>
                </div>
              )}
          </div>
        ): (
          <>
          {providers && 
          Object.values(providers).map((provider) => (
            <button
            type='button'
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className='black_btn'
            >
              Sign in with 
            </button>
          ))}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav