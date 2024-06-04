export default function Die({ value, color='#a855f7', colorHover='#5b21b6' }: { value: number, color: string, colorHover: string }) {
    return (
        <div className={`text-white flex items-center justify-center text-3xl font-bold rounded-lg bg-[${color}] shadow-lg shadow-[${color}]/50 hover:bg-[${colorHover}] hover:shadow-lg hover:shadow-[${colorHover}]/50 p-2 w-16 aspect-square`}>
            {value}
        </div>
    )
}