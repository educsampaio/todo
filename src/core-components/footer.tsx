import { NavLink } from 'react-router'
import { Container } from '../components/container'
import { Text } from '../components/text'

export function Footer() {
  return (
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
  )
}
