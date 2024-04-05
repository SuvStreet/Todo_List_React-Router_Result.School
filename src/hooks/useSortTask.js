import { useState } from 'react'

export const useSortTask = (todoLists) => {
	const [sort, setSort] = useState(false)
	const [sortTodoLists, setSortTodoLists] = useState([]) 

	const sortToggle = () => setSort(!sort)

	const handleClickSort = () => {
		sortToggle()

		if (!sort) {
			sortList()
		} else {
			setSortTodoLists(todoLists)
		}
	}

	const sortList = () => {
		setSortTodoLists(todoLists.toSorted((a, b) => a.title.localeCompare(b.title)))
	}

	return { sort, handleClickSort, sortTodoLists }
}
