import { useState } from "react";
import { v4 as uuid } from 'uuid';

const emojiCollection: string[] = ['🤠', '🥳', '🥸', '😎', '🤭', '🫢', '🫣', '🤫', '🤔', '🫡', '🤐', '🤨', '😐', '😑', '😶', '🫥', '😶‍🌫️'];

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: '🤠'}]);

    const addEmoji = () => {
        const randEmoji = emojiCollection[Math.floor(Math.random()*emojiCollection.length)]
        const newEmoji = {id: uuid(), emoji: randEmoji}
        setEmojis((prevEmojis)=> [...prevEmojis, newEmoji])
    }

    const deleteEmoji = (id: string) => {
        setEmojis((prevEmojis) => {
            return prevEmojis.filter((emoji: {id: string, emoji: string}) => emoji.id !== id)
        })
    }

    const makeAllHeart = () => {
        setEmojis((prevEmojis) => {
            return prevEmojis.map((e: {id: string, emoji: string}) => {
                return {...e, emoji: '❤️'}
            })
        })
    }

    return (
        <div className="flex flex-col items-center space-y-4">
            <button onClick={addEmoji} className="shadow-lg bg-green-300 shadow-green-300 hover:bg-green-400 hover:shadow-green-400 text-slate-600 font-bold py-2 px-4 rounded-lg">Add emoji</button>
            <button onClick={makeAllHeart} className="shadow-lg bg-red-300 shadow-red-300 hover:text-white hover:bg-red-400 hover:shadow-red-400 text-slate-600 font-bold py-2 px-4 rounded-lg">All heart</button>
            <div className="flex flex-wrap gap-2 text-white text-3xl">
                {emojis.map((emoji: {id: string, emoji: string}) => {
                    return (
                        <span className="cursor-pointer hover:scale-90" onClick={() => deleteEmoji(emoji.id)} key={emoji.id}>
                            {emoji.emoji}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}