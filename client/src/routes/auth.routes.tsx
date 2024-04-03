import { Routes, Route } from 'react-router-dom'
import Register from '../pages/Register/register'


export function AuthRoutes() {
    return (
        <Routes>
            <Route path='/' element={<h1>testado</h1>}></Route>
            <Route path='/register' element={<Register />}></Route>

        </Routes>

    )
}