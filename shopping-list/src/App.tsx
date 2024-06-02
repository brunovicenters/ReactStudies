import './App.css';
import ShoppingList from './components/ShoppingList';

const data: {id: number, item: string, quantity: number, completed: boolean}[] = [
  {id: 1, item: 'eggs', quantity: 12, completed: true},
  {id: 2, item: 'milk', quantity: 1, completed: false},
  {id: 3, item: 'chicken', quantity: 2, completed: false},
  {id: 4, item: 'bread', quantity: 6, completed: true},
];

function App() {

  return (
    <main className='h-screen w-screen bg-slate-900 flex items-center justify-center'>
      <ShoppingList data={data} />
    </main>
  )
}
export default App
