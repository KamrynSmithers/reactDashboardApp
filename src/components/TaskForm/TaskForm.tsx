import { useState } from 'react'
import type { TaskFormData, TaskPriority } from '../../types'

interface Props {
onAddTask: (data: TaskFormData) => void
}


export const TaskForm: React.FC<Props> = ({ onAddTask }) => {
const [formData, setFormData] = useState<TaskFormData>({
title: '',
description: '',
priority: 'medium'
})


const [error, setError] = useState('')


function handleSubmit(e: React.FormEvent) {
e.preventDefault()


if (!formData.title.trim()) {
setError('Task title is required')
return
}


onAddTask(formData)
setFormData({ title: '', description: '', priority: 'medium' })
setError('')
}
return (
<form onSubmit={handleSubmit} className="space-y-3">
<input
className="border p-2 w-full"
placeholder="Task title"
value={formData.title}
onChange={e => setFormData({ ...formData, title: e.target.value })}
/>


<textarea
className="border p-2 w-full"
placeholder="Description"
value={formData.description}
onChange={e => setFormData({ ...formData, description: e.target.value })}
/>


<select
className="border p-2 w-full"
value={formData.priority}
onChange={e => setFormData({ ...formData, priority: e.target.value as TaskPriority })}
>
<option value="low">Low</option>
<option value="medium">Medium</option>
<option value="high">High</option>
</select>

{error && <p className="text-red-500">{error}</p>}


<button className="bg-blue-600 text-white px-4 py-2">Add Task</button>
</form>
)
}