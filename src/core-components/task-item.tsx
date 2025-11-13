import { useState } from 'react'
import { ButtonIcon } from '../components/button-icon'
import { Card } from '../components/card'
import { InputCheckbox } from '../components/input-checkbox'
import { InputText } from '../components/input-text'
import { Text } from '../components/text'

import {
  TrashIcon,
  PencilSimpleIcon,
  XIcon,
  CheckIcon,
} from '@phosphor-icons/react'

export function TaskItem() {
  const [isEditing, setIsEditing] = useState(false)

  function handleEditTask() {
    setIsEditing(true)
  }

  function handleExitEditTask() {
    setIsEditing(false)
  }
  return (
    <Card size="md" className="flex items-center gap-4">
      {!isEditing ? (
        <>
          <InputCheckbox />
          <Text className="flex-1">🛒 Fazer compras da semana</Text>
          <div className="flex items-center gap-1">
            <ButtonIcon variant="tertiary" icon={TrashIcon} />
            <ButtonIcon
              variant="tertiary"
              icon={PencilSimpleIcon}
              onClick={handleEditTask}
            />
          </div>
        </>
      ) : (
        <>
          <InputText className="flex-1" />
          <div className="flex items-center gap-1">
            <ButtonIcon
              variant="secondary"
              icon={XIcon}
              onClick={handleExitEditTask}
            />
            <ButtonIcon icon={CheckIcon} />
          </div>
        </>
      )}
    </Card>
  )
}
