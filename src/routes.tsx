import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import Sidebar from './components/Sidebar/Sidebar'
import { Players } from './pages/Players/Players'
import { Divider } from '@mui/material'
import { Games } from './pages/Games/Games'
import { Teams } from './pages/Teams/Teams'

const AppRouter = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>

        <Sidebar />
        <Divider orientation={'vertical'} style={{ height: '100vh', marginRight: '68px' }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/games" element={<Games />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </div>
    </Router>
  )
}

export default AppRouter