import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import Menu from './components/Menu'
import LinksNav from './components/LinksNav'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

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
      <body className={roboto.className}>
        <Menu />
        <LinksNav />
        <div className='px-32'>{children}</div>
      </body>
    </html>
  )
}
