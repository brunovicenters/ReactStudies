import { useState } from "react";

const randomChoice = (arr: string[]) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

export default function Box({ colors }: { colors: string[] }) {
    const [color, setColor] = useState(randomChoice(colors));

    const changeColor = () => {
        const randomColor = randomChoice(colors);
        setColor(randomColor);
    };

    return (
        <div onClick={changeColor}
            style={{ backgroundColor: color }}
            className="w-24 h-24 rounded-3xl"
        ></div>
    );
}