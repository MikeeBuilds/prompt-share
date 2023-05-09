import '@styles/globals.css'
import { Html } from 'next/document'

export const metadata = {
  title: 'Promptopia',
  description: 'Promptopia is a place to find inspiration for your next writing project.'
}


const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
          <main className='app'>
            {children}
          </main>
      </body>
    </html>
  )
}

export default RootLayout