import useLocalStorageState from 'use-local-storage-state'
import { TASK_KEY, type Task } from '../models/task'

export function useTasks() {
  const [tasks] = useLocalStorageState<Task[]>(TASK_KEY, {
    defaultValue: [],
  })

  return {
    tasks,
    tasksCount: tasks.length,
    completedTasksCount: tasks.filter((task) => task.completed).length,
  }
}
