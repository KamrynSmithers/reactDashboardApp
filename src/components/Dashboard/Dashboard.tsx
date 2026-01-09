import { useEffect, useState } from 'react'
import type { Task, TaskFormData, TaskStatus, FilterOptions } from '../../types/index'

import { TaskForm } from '../TaskForm/TaskForm'
import { TaskList } from '../TaskList/TaskList'
import { TaskFilter } from '../TaskFilter/TaskFilter'

import { filterTasks, sortTasks } from '../../utils/taskUtils'


export const Dashboard = () => {
const [tasks, setTasks] = useState<Task[]>([])
const [filters, setFilters] = useState<FilterOptions>({
  status: 'all',
  priority: 'all',
  search: ''
})


useEffect(() => {
const stored = localStorage.getItem('tasks')
if (stored) setTasks(JSON.parse(stored))
}, [])


useEffect(() => {
localStorage.setItem('tasks', JSON.stringify(tasks))
}, [tasks])


function addTask(data: TaskFormData) {
setTasks(prev => [
...prev,
{
id: crypto.randomUUID(),
title: data.title, 
description: data.description,
priority: data.priority,
status: 'todo',
createdAt: new Date().toISOString()
}
])
}


function updateStatus(id: string, status: TaskStatus) {
setTasks(tasks.map(t => (t.id === id ? { ...t, status } : t)))
}


function deleteTask(id: string) {
setTasks(tasks.filter(t => t.id !== id))
}


const visibleTasks = sortTasks(filterTasks(tasks, filters))


return (
<div className="max-w-3xl mx-auto p-4 space-y-4">
<h1 className="text-2xl font-bold">Task Dashboard</h1>


<TaskForm onAddTask={addTask} />
<TaskFilter filters={filters} onChange={setFilters} />
<TaskList tasks={visibleTasks} onStatusChange={updateStatus} onDelete={deleteTask} />
</div>
)
}