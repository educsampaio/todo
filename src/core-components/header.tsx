import { Container } from '../components/container'
import Logo from '../assets/images/logo.svg'

export function Header() {
  return (
    <Container as="header" className="mt-4 md:mt-20 mb-8">
      <img src={Logo} alt="ToDo List" />
    </Container>
  )
}
