import { Badge } from './components/badge'
import { Text } from './components/text'

export function App() {
  return (
    <div>
      <Text as="p" variant="body-md-bold" className="text-pink-base">
        Hello World
      </Text>
      <Badge variant="secondary">0</Badge>
      <Badge>1 de 5</Badge>
    </div>
  )
}
