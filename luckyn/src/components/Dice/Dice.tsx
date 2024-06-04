import Die from "./Die";

export default function Dice({dice, color, colorHover}: {dice: number[], color: string, colorHover: string}) {
    return (
        <div className="flex gap-2">
            {dice.map((value, i) => (
                <Die key={i} value={value} color={color} colorHover={colorHover} />
            ))}
        </div>
    )
}