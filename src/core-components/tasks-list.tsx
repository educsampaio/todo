import { Button } from '../components/button'
import { TaskItem } from './task-item'
import { PlusIcon } from '@phosphor-icons/react'

import { useTasks } from '../hooks/use-tasks'
import { useTask } from '../hooks/use-task'
import type { Task } from '../models/task'

export function TasksList() {
  const { tasks, isLoadingTasks } = useTasks()
  const { prepareTask } = useTask()

  function handleNewTask() {
    prepareTask()
  }

  return (
    <>
      <section>
        <Button
          disabled={
            tasks.some((task) => task.state === 'creating') || isLoadingTasks
          }
          onClick={handleNewTask}
          icon={PlusIcon}
          className="w-full mb-3"
        >
          Nova tarefa
        </Button>
      </section>
      <ul className="space-y-2">
        {!isLoadingTasks &&
          tasks.map((task) => (
            <li key={task.id}>
              <TaskItem task={task} />
            </li>
          ))}

        {isLoadingTasks && (
          <>
            <li>
              <TaskItem isLoading={isLoadingTasks} task={{} as Task} />
            </li>
            <li>
              <TaskItem isLoading={isLoadingTasks} task={{} as Task} />
            </li>
            <li>
              <TaskItem isLoading={isLoadingTasks} task={{} as Task} />
            </li>
          </>
        )}
      </ul>
    </>
  )
}
