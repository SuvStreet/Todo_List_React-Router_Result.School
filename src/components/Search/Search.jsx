import propsType from 'prop-types'

import s from './style.module.css'

export const Search = ({ setValueSearch }) => {
	return (
		<input
			className={s.search}
			type='text'
			placeholder='Поиск'
			onChange={(e) => setValueSearch(e.target.value)}
		/>
	)
}

Search.propTypes = {
	setValueSearch: propsType.func
}
