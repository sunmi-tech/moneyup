import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/home/Home'
import Login from './pages/auth/login/Login'
import Signup from './pages/auth/signup/Signup'
import NotFound from './pages/notfound/NotFound'
import MyPage from './pages/mypage/MyPage'
function App() {

  return (
    <>
      <Routes>
        {/* 헤더가 필요한 컴포넌트  */}
        <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        </Route>

        {/* 헤더가 필요없는 컴포넌트  */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
