import LuckyN from './components/LuckyN'

function App() {

  return (
    <main className='h-screen w-screen bg-slate-900 flex flex-col justify-center items-center'>
      <LuckyN numDice={2} goal={6} />
    </main>
  )
}

export default App
