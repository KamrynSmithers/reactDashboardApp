import type { Task, TaskStatus } from '../../types'

interface Props {
task: Task
onStatusChange: (id: string, status: TaskStatus) => void
onDelete: (id: string) => void
}


export const TaskItem: React.FC<Props> = ({ task, onStatusChange, onDelete }) => {
return (
<div className="border p-3 rounded flex justify-between items-center">
<div>
<h3 className="font-bold">{task.title}</h3>
<p className="text-sm">{task.description}</p>
<p className="text-xs">Priority: {task.priority}</p>
</div>


<div className="flex gap-2">
<select
value={task.status}
onChange={e => onStatusChange(task.id, e.target.value as TaskStatus)}
className="border p-1"
>
<option value="todo">To Do</option>
<option value="in-progress">In Progress</option>
<option value="completed">Completed</option>
</select>
<button onClick={() => onDelete(task.id)} className="text-red-500">✕</button>
</div>
</div>
)
}