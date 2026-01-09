import type { Task, FilterOptions } from '../types/index'

export function filterTasks(tasks: Task[], filters: FilterOptions) {
  return tasks.filter(task => {
    const matchesStatus =
      filters.status === 'all' || task.status === filters.status

    const matchesPriority =
      filters.priority === 'all' || task.priority === filters.priority

    const matchesSearch =
      task.title.toLowerCase().includes(filters.search.toLowerCase())

    return matchesStatus && matchesPriority && matchesSearch
  })
}

export function sortTasks(tasks: Task[]) {
  return [...tasks].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime()
  )
}
