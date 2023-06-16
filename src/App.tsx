import Sidebar from "./components/Sidebar/Sidebar"
import { Players } from "./pages/Players/Players"

function App() {

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Players />
    </div>
  )
}

export default App
