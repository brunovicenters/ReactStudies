import './App.css';
import MedicalRecord from './components/MedicalRecord';

function App() {

  return (
    <main className="w-screen h-screen bg-slate-600 flex justify-center items-center">
      <MedicalRecord name='Vicente' age={19} gender='M' symptoms="Headache" />
    </main>
  )
}

export default App
