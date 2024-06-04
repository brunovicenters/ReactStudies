import { useState } from "react";

const emojiCollection: string[] = ['🤠', '🥳', '🥸', '😎', '🤭', '🫢', '🫣', '🤫', '🤔', '🫡', '🤐', '🤨', '😐', '😑', '😶', '🫥', '😶‍🌫️'];

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState(['🤠']);

    const addEmoji = () => {
        const newEmoji = emojiCollection[Math.floor(Math.random()*emojiCollection.length)]

        setEmojis(()=> [...emojis, newEmoji])
    }

    return (
        <div className="flex flex-col items-center space-y-4">
            <button onClick={addEmoji} className="shadow-lg bg-green-300 shadow-green-300 hover:bg-green-400 hover:shadow-green-400 text-slate-600 font-bold py-2 px-4 rounded-lg">Add emoji</button>
            <div className="flex flex-wrap gap-2 text-white text-3xl">{emojis.map((emoji, index) => <span key={index}>{emoji}</span>)}</div>
        </div>
    )
}