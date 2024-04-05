export const requestAddTask = (setIsLoading, setTodoLists, todoLists) => {
	const handleClickAddTask = async () => {
		const task = prompt('Введите задачу:')

		if (task?.trim()) {
			setIsLoading(true)

			fetch('http://localhost:5000/todos', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title: task }),
			})
				.then((response) => response.json())
				.then((data) => setTodoLists([...todoLists, data]))
				.finally(() => setIsLoading(false))
		}
	}

	return { handleClickAddTask }
}
