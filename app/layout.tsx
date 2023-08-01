import './globals.css'
import type { Metadata } from 'next'
import Menu from './components/Menu'
import LinksNav from './components/LinksNav'

export const metadata: Metadata = {
  title: 'Sergio Pujol Martorell',
  description: 'Web Dev Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Menu />
        <LinksNav />
        <div className='px-32'>{children}</div>
      </body>
    </html>
  )
}
