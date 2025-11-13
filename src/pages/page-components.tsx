import { Badge } from '../components/badge'
import { Text } from '../components/text'
import { Button } from '../components/button'
import { ButtonIcon } from '../components/button-icon'
import { Card } from '../components/card'
import { Container } from '../components/container'
import { InputCheckbox } from '../components/input-checkbox'
import { InputText } from '../components/input-text'
import { Skeleton } from '../components/skeleton'

import { PlusIcon } from '@phosphor-icons/react'

export function PageComponents() {
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

      <div className="flex gap-2">
        <Badge variant="secondary">0</Badge>
        <Badge>1 de 5</Badge>
        <Badge isLoading>5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Nova tarefa</Button>
      </div>

      <div className="flex gap-2">
        <ButtonIcon icon={PlusIcon} />
        <ButtonIcon icon={PlusIcon} variant="secondary" />
        <ButtonIcon icon={PlusIcon} variant="tertiary" />
        <ButtonIcon icon={PlusIcon} isLoading />
      </div>

      <div>
        <InputText />
      </div>

      <div className="flex gap-2">
        <InputCheckbox />
        <InputCheckbox isLoading />
      </div>

      <div>
        <Card size="md">Hello World</Card>
      </div>

      <div className="space-y-2">
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
      </div>
    </Container>
  )
}
