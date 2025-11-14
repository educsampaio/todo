import { useState, type ChangeEvent, type FormEvent } from 'react'
import { ButtonIcon } from '../components/button-icon'
import { Card } from '../components/card'
import { InputCheckbox } from '../components/input-checkbox'
import { InputText } from '../components/input-text'
import { Text } from '../components/text'
import { cx } from 'class-variance-authority'

import type { Task } from '../models/task'
import { useTask } from '../hooks/use-task'

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
  const [taskTitle, setTaskTitle] = useState(task.title || '')
  const { updateTask, updateTaskStatus, deleteTask } = useTask()

  function handleEditTask() {
    setIsEditing(true)
  }

  function handleExitEditTask() {
    if (task.state === 'creating') {
      deleteTask(task.id)
    }

    setIsEditing(false)
  }

  function handleChangeTaskTitle(e: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || '')
  }

  function handleSaveTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    updateTask(task.id, { title: taskTitle })
    setIsEditing(false)
  }

  function handleChangeTaskStatus(e: ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked

    updateTaskStatus(task.id, checked)
  }

  function handleDeleteTask() {
    deleteTask(task.id)
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            checked={task?.completed}
            onChange={handleChangeTaskStatus}
          />
          <Text
            className={cx('flex-1', {
              'line-through text-gray-300!': task?.completed,
            })}
          >
            {task?.title}
          </Text>
          <div className="flex items-center gap-1">
            <ButtonIcon
              variant="tertiary"
              icon={TrashIcon}
              onClick={handleDeleteTask}
            />
            <ButtonIcon
              variant="tertiary"
              icon={PencilSimpleIcon}
              onClick={handleEditTask}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText
            onChange={handleChangeTaskTitle}
            value={taskTitle}
            required
            autoFocus
            className="flex-1"
          />
          <div className="flex items-center gap-1">
            <ButtonIcon
              type="button"
              variant="secondary"
              icon={XIcon}
              onClick={handleExitEditTask}
            />
            <ButtonIcon type="submit" icon={CheckIcon} />
          </div>
        </form>
      )}
    </Card>
  )
}
