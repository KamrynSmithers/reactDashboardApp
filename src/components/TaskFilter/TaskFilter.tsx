import type { FilterOptions, TaskPriority, TaskStatus } from '../../types'


interface Props {
filters: FilterOptions
onChange: (filters: FilterOptions) => void
}


export const TaskFilter: React.FC<Props> = ({ filters, onChange }) => {
return (
<div className="flex gap-2">
<input
placeholder="Search"
className="border p-2"
value={filters.search}
onChange={e => onChange({ ...filters, search: e.target.value })}
/>


<select
value={filters.status}
onChange={e => onChange({ ...filters, status: e.target.value as TaskStatus | 'all' })}
>
<option value="all">All Status</option>
<option value="todo">To Do</option>
<option value="in-progress">In Progress</option>
<option value="completed">Completed</option>
</select>
<select
value={filters.priority}
onChange={e => onChange({ ...filters, priority: e.target.value as TaskPriority | 'all' })}
>
<option value="all">All Priority</option>
<option value="low">Low</option>
<option value="medium">Medium</option>
<option value="high">High</option>
</select>
</div>
)
}