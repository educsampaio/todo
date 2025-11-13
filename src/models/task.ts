export const TASK_KEY = 'tasks'

export interface Task {
  id: string
  title: string
  completed?: boolean
  state?: 'creating' | 'created'
}
