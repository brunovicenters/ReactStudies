import './App.css'
import Clicker from './components/Clicker'
import MouseOver from './components/MouseOver'

function App() {

  return (
    <main className="h-screen w-screen flex flex-col space-y-5 justify-center items-center relative bg-slate-900">
      <Clicker />
      <MouseOver />
      <img src="logo.svg" alt="My logo" className='absolute top-4 left-4 w-16' />
    </main>
  )
}

export default App
