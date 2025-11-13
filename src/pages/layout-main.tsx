import { Outlet } from 'react-router'
import { Header } from '../core-components/header'
import { Footer } from '../core-components/footer'

export function LayoutMain() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
