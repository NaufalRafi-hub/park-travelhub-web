import Footer from './Components/Footer/page'
import Navbar from './Components/Navbar/page'
import NavNew from './Components/Navnew/page'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Park Travel Hub',
  description: 'PT Park Jaya Sentosa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      {/* <Navbar /> */}
      <NavNew />
      <body className={inter.className}>{children}
      </body>
      <Footer/>
    </html>
  )
}
