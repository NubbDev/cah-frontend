import style from '@/styles/pages/globals.module.css'
import '@/styles/pages/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ReduxProvider from '@/redux/provider'
import BigInteractive from '@/components/layout/BackgroundInteractive'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cards Against Humanity',
  description: 'Cards Against Humanity is a party game for horrible people. Read about it and buy it here.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={`${style.body} ${inter.className}`}>
          <ReduxProvider>{children}</ReduxProvider>
          <div className={style['gradient-bg']}>
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
            <div className={style['gradients-container']}>
              {/* <div className={style['g1']}/>
              <div className={style['g2']}/>
              <div className={style['g3']}/>
              <div className={style['g4']}/>
              <div className={style['g5']}/> */}
              {/* <BigInteractive className={style['interactive']}/> */}
            </div>
          </div>
        </body>
        
    </html>

  )
}
