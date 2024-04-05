import { useState } from 'react'
import { Button, Search, Title } from '../components'
import { requestAddTask } from '../utils'
import { useGetTodoList, useSearch, useSortTask } from '../hooks'
import { useNavigate } from 'react-router-dom'

import s from './style.module.css'

export const HomePage =  () => {
	const [isLoading, setIsLoading] = useState(true)

	const [valueSearch, setValueSearch] = useState('')
	const navigate = useNavigate()

	const { todoLists, setTodoLists } = useGetTodoList(setIsLoading)
	const { resultSearch, debouncedSearchTerm } = useSearch(todoLists, valueSearch)

	const { handleClickSort, sort, sortTodoLists } = useSortTask(todoLists, setTodoLists)
	const { handleClickAddTask } = requestAddTask(setIsLoading, setTodoLists, todoLists)

	const handleClickTask = (event) => {
		const { id } = event.target.closest('div')

		navigate(`/task/${id}`)
	}

	return (
		<>
			<Title />

			<div className={s.change}>
				<Search setValueSearch={setValueSearch} />

				<Button onClick={handleClickAddTask} type={'add'} disabled={isLoading} />

				<Button
					type={'sort'}
					onClick={handleClickSort}
					sort={sort}
				/>
			</div>

			{isLoading ? (
				<div className='loader'></div>
			) : (
				<div className={s.taskList}>
					{(debouncedSearchTerm && resultSearch.length === 0) ||
					todoLists.length === 0 ? (
						<small className={s.emptyTodoList}>
							{todoLists.length === 0
								? 'На сегодня дел нет, может добавим?'
								: 'Ничего не нашли!'}
						</small>
					) : (
						(debouncedSearchTerm ? resultSearch : sort ? sortTodoLists : todoLists).map(
							({ title, id }) => (
								<div key={id} className={s.task} id={id}>
									<span className={s.text} onClick={handleClickTask}>
										{title}
									</span>
								</div>
							),
						)
					)}
				</div>
			)}
		</>
	)
}
