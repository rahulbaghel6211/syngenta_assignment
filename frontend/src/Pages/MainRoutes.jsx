import React from 'react';

import {
  Route,
  Routes,
} from 'react-router-dom';

import Form from './Form';

const MainRoutes = () => {
  return (
  <Routes>
    <Route  path='/add' element={<Form/>}   />

  </Routes>
  )
}

export default MainRoutes
