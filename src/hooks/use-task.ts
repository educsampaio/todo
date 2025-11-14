import useLocalStorageState from 'use-local-storage-state'
import { TASK_KEY, type Task } from '../models/task'

export function useTask() {
  const [tasks, setTasks] = useLocalStorageState<Task[]>(TASK_KEY, {
    defaultValue: [],
  })

  function prepareTask() {
    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), title: '', state: 'creating' },
    ])
  }

  function updateTask(id: string, payload: { title: Task['title'] }) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, state: 'created', ...payload } : task
      )
    )
  }

  function updateTaskStatus(id: string, completed: boolean) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, completed } : task))
    )
  }

  function deleteTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return { prepareTask, updateTask, updateTaskStatus, deleteTask }
}
