import { Badge } from './components/badge'
import { Text } from './components/text'

import { Button } from './components/button'
import { ButtonIcon } from './components/button-icon'
import { InputText } from './components/input-text'
import { Card } from './components/card'
import { Container } from './components/container'
import { PlusIcon } from '@phosphor-icons/react'

export function App() {
  return (
    <Container className="flex flex-col gap-10">
      <div>
        <Text as="p" variant="body-md-bold" className="text-pink-base">
          Hello World
        </Text>
        <Text as="p" variant="body-md">
          Hello World
        </Text>
        <Text as="p" variant="body-sm-bold" className="text-green-base">
          Hello World
        </Text>
      </div>

      <div>
        <Badge variant="secondary">0</Badge>
        <Badge>1 de 5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Nova tarefa</Button>
      </div>

      <div>
        <ButtonIcon icon={PlusIcon} />
        <ButtonIcon icon={PlusIcon} variant="secondary" />
        <ButtonIcon icon={PlusIcon} variant="tertiary" />
      </div>

      <div>
        <InputText />
      </div>

      <div>
        <Card size="md">Hello World</Card>
      </div>
    </Container>
  )
}
