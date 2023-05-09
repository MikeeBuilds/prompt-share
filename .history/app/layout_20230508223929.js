import '@styles/globals.css'
import { Html } from 'next/document'
import { Children } from 'react'

export const metadata = {
  title: 'Promptopia',
  description: 'Promptopia is a place to find inspiration for your next writing project.'
}


const RootLayout = () => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
          <main className='app'>
            {Children}
          </main>
      </body>
    </html>
  )
}

export default RootLayout