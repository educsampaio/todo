import { Badge } from './components/badge'
import { Text } from './components/text'

import { Button } from './components/button'
import { ButtonIcon } from './components/button-icon'
import { InputText } from './components/input-text'
import { PlusIcon } from '@phosphor-icons/react'

export function App() {
  return (
    <div>
      <Text as="p" variant="body-md-bold" className="text-pink-base">
        Hello World
      </Text>
      <Badge variant="secondary">0</Badge>
      <Badge>1 de 5</Badge>
      <Button icon={PlusIcon}>Nova tarefa</Button>
      <ButtonIcon icon={PlusIcon} />
      <ButtonIcon icon={PlusIcon} variant="tertiary" />
      <InputText />
    </div>
  )
}
