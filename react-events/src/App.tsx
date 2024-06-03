import './App.css'
import Clicker from './components/Clicker'

function App() {

  return (
    <main className="h-screen w-screen flex justify-center items-center relative bg-slate-900">
      <Clicker />
      <img src="logo.svg" alt="My logo" className='absolute top-4 left-4 w-16' />
    </main>
  )
}

export default App
