import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KMCSC',
  description: 'Developed by shubham shah.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className='min-h-screen'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}



// CREATE TABLE admin (
//   id INT NOT NULL,
//   username VARCHAR(255) NOT NULL UNIQUE,
//   password VARCHAR(255) NOT NULL,
//   email VARCHAR(255) NOT NULL UNIQUE,
//   name VARCHAR(255) NOT NULL,
//   created VARCHAR(255),
//   is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
//   current_admin BOOLEAN NOT NULL DEFAULT FALSE,
//   PRIMARY KEY (id)
// );