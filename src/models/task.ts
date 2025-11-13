export const TASK_KEY = 'tasks'

export interface Task {
  id: number
  title: string
  completed?: boolean
  state?: 'creating' | 'created'
}
