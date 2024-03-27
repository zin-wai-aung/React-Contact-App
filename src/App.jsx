import React from 'react'
import { HomePage, LoginPage, RegisterPage } from "./page";
import {Route ,Routes} from "react-router-dom"

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<LoginPage/>}>  </Route>
        <Route path='/register' element={<RegisterPage/>}>  </Route>
        <Route path='/home' element={<HomePage/>}>  </Route>
      </Routes>
    </main>
  )
}

export default App