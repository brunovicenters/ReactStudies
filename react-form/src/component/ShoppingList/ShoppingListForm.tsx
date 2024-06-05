import { useState } from "react";

export default function ShoppingListForm({addItem}: {addItem: (item: {product: string, quantity: number}) => void}) {
    const [formData, setFormData] = useState({product: '', quantity: 1});

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target;
        setFormData(oldData => {
            return{...oldData, [name]: value}
        });
    }

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        addItem(formData);
        setFormData({product: '', quantity: 1});
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-white">Shopping List Form</h1>
            <form onSubmit={handleSubmit} className="flex space-x-2 items-end">
                <div className="flex flex-col space-y-1">
                    <label htmlFor="product" className="text-white text-lg">Product:</label>
                    <input required id="product" name="product" onChange={handleChange} value={formData.product} className="w-full px-4 py-2 rounded" type="text" placeholder="Enter your product" />
                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="quantity" className="text-white text-lg">Quantity:</label>
                    <input required id="quantity" min={1} step={1} name="quantity" onChange={handleChange} value={formData.quantity} className="w-full px-4 py-2 rounded" type="number" placeholder="Enter your quantity" />
                </div>
                <button className="w-1/4 h-10 bg-gradient-to-tr from-green-300/60 to-70% to-green-600/60 text-white box-border hover:border-2 border-white px-4 py-1 rounded">
                    <span className="w-full h-full">
                        Submit
                    </span>
                </button>
            </form>
        </div>
    )
}