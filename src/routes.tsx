import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import Sidebar from './components/Sidebar/Sidebar'
import { Players } from './pages/Players/Players'
import { Divider } from '@mui/material'
import { Games } from './pages/Games/Games'
import { Teams } from './pages/Teams/Teams'
import App from './App'
import { Disclosure } from '@headlessui/react'
import { MenuOptions } from './components/Menu/Menu'

const AppRouter = () => {
  return (
    <Router>

      <Disclosure as="nav" className="bg-gray-800 mb-12">
        {({ open }) => (
          <>
            <MenuOptions open={open} />
          </>
        )}
      </Disclosure>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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