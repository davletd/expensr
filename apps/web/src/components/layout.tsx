// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
// import { Inter } from 'next/font/google'
import { Outlet } from 'react-router-dom';

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

const Layout = ()  => {
  return (
    <div>
      {/* Common layout elements (e.g., navigation) can go here */}
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav> */}

      {/* This outlet is where child routes will be rendered */}
      <Outlet />
    </div>
  );
}

export default Layout;