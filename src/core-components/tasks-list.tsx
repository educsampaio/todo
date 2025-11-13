import { Button } from '../components/button'
import { TaskItem } from './task-item'
import { PlusIcon } from '@phosphor-icons/react'

import { useTasks } from '../hooks/use-tasks'

export function TasksList() {
  const { tasks } = useTasks()

  return (
    <>
      <section>
        <Button icon={PlusIcon} className="w-full mb-3">
          Nova tarefa
        </Button>
      </section>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskItem />
          </li>
        ))}
      </ul>
    </>
  )
}
