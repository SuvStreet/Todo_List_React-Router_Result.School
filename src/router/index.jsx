import { Routes, Route } from 'react-router-dom'

import { HomePage, TaskPage, NotFoundPage } from '../views'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/task/:id' element={<TaskPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}
