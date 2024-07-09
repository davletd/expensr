// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
// import { Inter } from 'next/font/google'
import classnames from 'classnames'

// const fontHeading = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-heading',
// })

// const fontBody = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-body',
// })

export default function Layout({ children }: any) {
  return (
    <html lang="en">
      <body 
        className={classnames(
          'antialiased',
        )}
      >
        {children}
      </body>
    </html>
  )
}