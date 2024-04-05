import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useGetTask, useDeleteTask } from '../hooks'
import { Button, TaskNotFound } from '../components'
import { requestEditTask } from '../utils'

import s from './style.module.css'

export const TaskPage = () => {
	const [isLoading, setIsLoading] = useState(true)
	const navigate = useNavigate()

	const { id } = useParams()
	const { task, setTask } = useGetTask(id, setIsLoading)

	const { handleClickEditTask } = requestEditTask(task, setIsLoading, setTask)
	const { handleClickDeleteTask } = useDeleteTask(task, setIsLoading)

	if (!Object.keys(task).length && !isLoading) {
		return <TaskNotFound />
	}

	return (
		<>
			{isLoading ? (
				<div className='loader'></div>
			) : (
				<div className={s.taskPage}>
					<h1 className={s.taskText}>{task.title}</h1>
					<div className={s.section_button}>
						<Button onClick={() => navigate(-1)} type={'back'} />
						<Button onClick={handleClickEditTask} type={'edit'} />
						<Button onClick={handleClickDeleteTask} type={'remove'} />
					</div>
				</div>
			)}
		</>
	)
}
