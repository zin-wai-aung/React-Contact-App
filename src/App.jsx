import React from 'react'
import { HomePage, LoginPage, RegisterPage , ContactAppPage, ContactPage} from "./page";
import {Route ,Routes} from "react-router-dom"
import { DetailContact } from './component';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<LoginPage/>}>  </Route>
        <Route path='/register' element={<RegisterPage/>}>  </Route>
        <Route path='/home' element={<HomePage />}>
          <Route index element={<ContactPage/>} />
          <Route path='add' element={<ContactAppPage/>} />
          <Route path='contact/:id' element={<DetailContact/>} />
        </Route>
      </Routes>
    </main>
  )
}

export default App