import useLocalStorageState from 'use-local-storage-state'
import { TASK_KEY, type Task } from '../models/task'

export function useTasks() {
  const [tasks] = useLocalStorageState<Task[]>(TASK_KEY, {
    defaultValue: [],
  })

  return {
    tasks,
    createdTasksCount: tasks.filter((task) => task.state === 'created').length,
    completedTasksCount: tasks.filter((task) => task.completed).length,
  }
}
