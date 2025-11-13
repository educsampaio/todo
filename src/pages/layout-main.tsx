import { NavLink, Outlet } from 'react-router'
import { Container } from '../components/container'
import { Text } from '../components/text'

import Logo from '../assets/images/logo.svg'

export function LayoutMain() {
  return (
    <>
      <Container as="header" className="mt-4 md:mt-20 mb-8">
        <img src={Logo} alt="ToDo List" />
      </Container>
      <main>
        <Outlet />
      </main>
      <Container
        as="footer"
        className="flex items-center justify-center gap-4 py-8"
      >
        <NavLink to="/">
          <Text variant="body-md-bold" className="text-gray-300">
            Tarefas
          </Text>
        </NavLink>
        <NavLink to="/componentes">
          <Text variant="body-md-bold" className="text-gray-300">
            Componentes
          </Text>
        </NavLink>
      </Container>
    </>
  )
}
