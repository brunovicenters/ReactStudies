import { useState } from "react";
import { v4 as uuid } from 'uuid';
import ShoppingListForm from "./ShoppingListForm";

export default function ShoppingList() {
    const [items, setItems] = useState([
        {id: uuid(), product: 'Banana', quantity: 2},
        {id: uuid(), product: 'Apple', quantity: 1},
        {id: uuid(), product: 'Orange', quantity: 3}])

        const addItem = (item: {product: string, quantity: number}) => {
            setItems((items) => {
                return [...items, {...item, id: uuid()}]
            })
        }

    return (
        <div className="flex flex-col space-y-4">
            <ShoppingListForm addItem={addItem} />

            <h1 className="text-3xl font-bold text-white text-center">Shopping List</h1>
            <ul className="flex flex-col text-white list-disc">
                {items.map(item => <li key={item.id}>{item.product} - {item.quantity}</li>)}
            </ul>
        </div>
    )
}