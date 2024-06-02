import ColorList from "./components/ColorList"


function App() {

  return (
    <main className="w-full h-screen bg-gray-950 flex justify-center items-center">
      <ColorList colors={['red', 'pink', 'mediumpurple','yellow', 'green', 'blue', 'purple']}/>
    </main>
  )
}

export default App
