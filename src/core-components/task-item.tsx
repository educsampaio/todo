import { useState } from 'react'
import { ButtonIcon } from '../components/button-icon'
import { Card } from '../components/card'
import { InputCheckbox } from '../components/input-checkbox'
import { InputText } from '../components/input-text'
import { Text } from '../components/text'
import { cx } from 'class-variance-authority'

import type { Task } from '../models/task'

import {
  TrashIcon,
  PencilSimpleIcon,
  XIcon,
  CheckIcon,
} from '@phosphor-icons/react'

interface TaskItemProps {
  task: Task
}

export function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(
    task?.state === 'creating' ? true : false
  )

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
          <InputCheckbox
            value={task?.completed?.toString()}
            checked={task?.completed}
          />
          <Text
            className={cx('flex-1', {
              'line-through': task?.completed,
            })}
          >
            {task?.title}
          </Text>
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
