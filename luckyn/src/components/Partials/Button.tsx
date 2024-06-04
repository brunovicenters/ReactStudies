export default function Button({text, onClick}: {text: string, onClick: () => void}) {
    return (
        <button onClick={onClick} className="transition ease-in-out duration-100 hover:-rotate-12 text-xl font-bold bg-emerald-500 hover:bg-emerald-600 text-black hover:text-white p-2 rounded-lg uppercase mt-4 shadow-md shadow-emerald-500/50 hover:shadow-lg hover:shadow-emerald-600/50">
            {text}
        </button>

    )
}