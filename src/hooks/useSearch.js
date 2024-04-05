import { useEffect, useState } from 'react'

import useDebounce from './useDebounce'

export const useSearch = (todoLists, valueSearch) => {
	const [resultSearch, setResultSearch] = useState([])

	const debouncedSearchTerm = useDebounce(valueSearch, 700)

	useEffect(() => {
		if (debouncedSearchTerm.trim() !== '') {
			setResultSearch(() =>
				todoLists.filter((todoList) => {
					return todoList.title
						.toLowerCase()
						.includes(debouncedSearchTerm.toLowerCase())
				}),
			)
		} else {
			setResultSearch(todoLists)
		}
	}, [debouncedSearchTerm, todoLists])

	return { resultSearch, debouncedSearchTerm }
}
