import type { Task, TaskStatus } from '../../types'
import { TaskItem } from './TaskItem'


interface Props {
tasks: Task[]
onStatusChange: (id: string, status: TaskStatus) => void
onDelete: (id: string) => void
}


export const TaskList: React.FC<Props> = ({ tasks, onStatusChange, onDelete }) => {
return (
<div className="space-y-2">
{tasks.map(task => (
<TaskItem
key={task.id}
task={task}
onStatusChange={onStatusChange}
onDelete={onDelete}
/>
))}
</div>
)
}