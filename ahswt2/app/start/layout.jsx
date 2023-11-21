import './globals.css'
import Image from 'next/image'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        {children}
        
      </body>
      
    </html>
  )
}