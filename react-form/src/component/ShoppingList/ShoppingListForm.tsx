import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    product: string
    quantity: number
}

export default function ShoppingListForm({addItem}: {addItem: (item: {product: string, quantity: number}) => void}) {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({mode: "onChange", reValidateMode: "onSubmit"});
    const [formData, setFormData] = useState({product: '', quantity: 1});

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target;
        setFormData(oldData => {
            return{...oldData, [name]: value}
        });
    }

    const onSubmit: SubmitHandler<Inputs> = () => {
        addItem(formData);
        setFormData({product: '', quantity: 1});
    }

    const registerOptions = {
        product:{
            required: "Product is required!",
            maxLength: {
                value: 5,
                message: "Max length is 5"
            }
        },
        quantity: {
            required: "Quantity is required!",
            min: {
                value: 1,
                message: "Min quantity is 5"
            }
        }
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-white">Shopping List Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-2 items-end">
                <div className="relative flex flex-col space-y-1">
                    <label htmlFor="product" className="text-white text-lg">Product:</label>
                    <input required id="product" {...register("product", registerOptions.product)} onChange={handleChange} value={formData.product} className="w-full px-4 py-2 rounded" type="text" placeholder="Enter your product" />
                    {errors.product && <span className="absolute -bottom-6 left-0 text-red-500">{errors.product.message}</span>}
                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="quantity" className="text-white text-lg">Quantity:</label>
                    <input required id="quantity" min={1} step={1} {...register("quantity", registerOptions.quantity)} onChange={handleChange} value={formData.quantity} className="w-full px-4 py-2 rounded" type="number" placeholder="Enter your quantity" />
                    {errors.quantity && <span className="absolute bottom-0 left-0 text-red-500">{errors.quantity.message}</span>}
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