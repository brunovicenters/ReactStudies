import LuckyN from './components/LuckyN';
import { sum } from "./utils";

const lessThan = (numbers: number[]) => sum(numbers) < 7;

const equals7 = (numbers: number[]) => sum(numbers) === 7;

const allSame = (numbers: number[]) => numbers.every((num) => num === numbers[0]);

function App() {

  return (
    <main className='h-screen w-screen bg-slate-900 flex flex-col justify-center items-center'>
      <section className='flex gap-4'>
        <LuckyN numDice={2} winCheck={lessThan} title="Less than 7" />
        <LuckyN numDice={2} winCheck={equals7} title="Equals 7" />
        <LuckyN numDice={2} winCheck={allSame} title="All same" />
      </section>
    </main>
  )
}

export default App
