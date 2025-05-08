import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import MyPage from '../pages/MyPage'
import NotFound from '../pages/NotFound'

export default function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={
                <PrivateRoute>
                <Home />
                </PrivateRoute>
                } />
            <Route path='/mypage' element={
                <PrivateRoute>
                <MyPage />
                </PrivateRoute>
                } />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

    )
}