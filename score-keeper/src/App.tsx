import FancyScoreKeeper from "./components/FancyScoreKeeper"

function App() {

  return (
    <main className="h-screen w-screen flex items-center justify-center bg-slate-900">
      {/* <ScoreKeeper /> */}
      <FancyScoreKeeper qty={4} target={5} />
    </main>
  )
}

export default App
