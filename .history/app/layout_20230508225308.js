import Nav from '@components/Nav'
import 
import '@styles/globals.css'

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
            <Nav />
            {children}
          </main>
      </body>
    </html>
  )
}

export default RootLayout