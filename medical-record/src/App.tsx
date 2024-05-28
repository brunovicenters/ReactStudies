import './App.css';
import MedicalRecord from './components/MedicalRecord';

function App() {

  return (
    <main className="w-screen h-screen bg-slate-600 space-x-4 flex justify-center items-center">
      <MedicalRecord name='Vicente' age={19} gender='M' symptoms={['Headache', 'Vomiting']} />
      <MedicalRecord name='Tarsila' age={18} gender="F"  symptoms={['Cough']} />
      <MedicalRecord name='Alexis' age={15}  symptoms={["Fever", "Headache", "Stomachache"]} />
    </main>
  )
}

export default App
