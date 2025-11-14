import { useEffect, useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import { TASK_KEY, type Task } from '../models/task'
import { delay } from '../helpers/utils'

export function useTasks() {
  const [tasksData] = useLocalStorageState<Task[]>(TASK_KEY, {
    defaultValue: [],
  })
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoadingTasks, setIsLoadingTasks] = useState(true)

  async function fetchTasks() {
    if (isLoadingTasks) {
      await delay(2000)
      setIsLoadingTasks(false)
    }

    setTasks(tasksData)
  }

  useEffect(() => {
    fetchTasks()
  }, [tasksData])

  return {
    tasks,
    createdTasksCount: tasks.filter((task) => task.state === 'created').length,
    completedTasksCount: tasks.filter((task) => task.completed).length,
    isLoadingTasks,
  }
}
