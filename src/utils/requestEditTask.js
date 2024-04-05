export const requestEditTask = (task, setIsLoading, setTask) => {
	const handleClickEditTask = async () => {
		const { title, id } = task

		console.log('task(handleClickEditTask)', task)

		const editTask = prompt('Введите свои изменения:', title)

		if (editTask?.trim() && title !== editTask) {
			setIsLoading(true)

			const response = await fetch(`http://localhost:5000/todos/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title: editTask }),
			})

			const data = await response.json()

			if(data !== null) {
				setTask(data)
				setIsLoading(false)
			}
		}
	}

	return { handleClickEditTask }
}
