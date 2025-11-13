import { Button } from '../components/button'
import { TaskItem } from './task-item'
import { PlusIcon } from '@phosphor-icons/react'

export function TasksList() {
  return (
    <>
      <section>
        <Button icon={PlusIcon} className="w-full mb-3">
          Nova tarefa
        </Button>
      </section>
      <ul className="space-y-2">
        <li>
          <TaskItem />
        </li>
        <li>
          <TaskItem />
        </li>
        <li>
          <TaskItem />
        </li>
      </ul>
    </>
  )
}
