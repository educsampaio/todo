import useLocalStorageState from 'use-local-storage-state'
import { TASK_KEY, type Task } from '../models/task'
import { delay } from '../helpers/utils'
import { useState } from 'react'

export function useTask() {
  const [tasks, setTasks] = useLocalStorageState<Task[]>(TASK_KEY, {
    defaultValue: [],
  })
  const [isUpdatingTask, setIsUpdatingTask] = useState(false)
  const [isDeletingTask, setIsDeletingTask] = useState(false)

  function prepareTask() {
    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), title: '', state: 'creating' },
    ])
  }

  async function updateTask(id: string, payload: { title: Task['title'] }) {
    setIsUpdatingTask(true)
    await delay(1000)

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, state: 'created', ...payload } : task
      )
    )

    setIsUpdatingTask(false)
  }

  async function updateTaskStatus(id: string, completed: boolean) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, completed } : task))
    )
  }

  async function deleteTask(id: string) {
    setIsDeletingTask(true)
    await delay(1000)

    setTasks(tasks.filter((task) => task.id !== id))

    setIsDeletingTask(false)
  }

  return {
    prepareTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
    isUpdatingTask,
    isDeletingTask,
  }
}
