import propsType from 'prop-types'

import s from './style.module.css'

import remove from '../../assets/delete.svg'
import edit from '../../assets/edit.svg'
import add from '../../assets/add.svg'
import sort from '../../assets/sort.svg'
import back from '../../assets/back.svg'
import sort_off from '../../assets/sort_off.svg'

const IMG = {
	remove,
	edit,
	add,
	sort,
	back,
}

const TEXT = {
	remove: 'Удалить',
	edit: 'Редактировать',
	add: 'Добавить',
	sort: 'Сортировать',
	back: 'Назад',
}

export const Button = ({ onClick, type, sort }) => {
	return (
		<button className={(s[type] || '') + ' ' + (sort ? s.active : '')} onClick={onClick}>
			{['edit', 'remove', 'add', 'sort', 'back'].includes(type) && (
				<>
					<img src={!sort ? IMG[type] : sort_off} alt={type} />
					<span className={s.text}>{TEXT[type]}</span>
				</>
			)}
		</button>
	)
}

Button.propTypes = {
	onClick: propsType.func,
	type: propsType.string,
	sort: propsType.bool,
}
