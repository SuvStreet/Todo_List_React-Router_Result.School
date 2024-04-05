import { useNavigate } from 'react-router-dom'

export const useDeleteTask = (task, setLoading) => {
	const navigate = useNavigate()

	const handleClickDeleteTask = async () => {
		const textTask =
			task.title.length < 50 ? task.title : task.title.substring(0, 50) + '...'

		if (confirm(`Вы уверены, что хотите удалить задачу - "${textTask}" ?`)) {
			setLoading(true)

			const { id } = task

			await fetch(`http://localhost:5000/todos/${id}`, {
				method: 'DELETE',
			})

			navigate('/')
		}
	}

	return { handleClickDeleteTask }
}
