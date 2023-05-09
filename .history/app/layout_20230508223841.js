import '@styles/globals.css'
import { Html } from 'next/document'
import { Children } from 'react'

export const metadata = {
  title: 'Promptopia',
  description: 'Promptopia is a place to find inspiration for your next writing project.'
}


const layout = () => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient' />
          <main className='app'>
            {Children}
          </main>
        </div>
      </body>
    </html>
  )
}

export default layout