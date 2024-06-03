import ContainerBoxes from "./components/ColorBoxes/ContainerBoxes"

function App() {

  return (
    <main className='h-screen w-screen flex  justify-center items-center bg-slate-900 relative'>

    <ContainerBoxes />

    <img src="logo.svg" alt="" className="w-24 h-auto absolute top-4 left-4" />
    </main>
  )
}

export default App
