import { useEffect, useState } from 'react'

export const useGetTask = (id, setIsLoading) => {
	const [task, setTask] = useState({})

	const fetchTask = async () => {
		try {
			const response = (await fetch(`http://localhost:5000/todos/${id}`)) || {}

			if (!response.ok) {
				throw new Error('Failed to fetch task')
			}

			const data = await response.json()
			if (Object.keys(data).length) {
				setTask(data)
			}

		} catch (error) {
			console.error(error)
		}

		setIsLoading(false)
	}

	useEffect(() => {
		fetchTask()
	}, [])

	return { task, setTask }
}
