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

  return { prepareTask }
}
