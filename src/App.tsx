import './App.css'
import {useState} from "react";

const emojiList = ['😏', '🥹', '🤨', '🤩'];

function App() {
  const [selected, setSelected] = useState(emojiList[0]);

  const select = (emoji: string) => {
    const index = emojiList.findIndex(e => e === emoji);

    const $activeItem: HTMLDivElement | null = document.querySelector(".active");

    if ($activeItem) {
      $activeItem.style.transform = `translateX(${index * 80}px)`
      setSelected(emoji)
    }
  }

  return (
    <div className="container">
      <div className="emoji">{selected}</div>

      <ul className="emoji-list">
        {emojiList.map(emoji => (
          <li key={emoji} className="emoji-list-item" onClick={() => select(emoji)}>{emoji}</li>
        ))}

        <li className="active"></li>
      </ul>
    </div>
  )
}

export default App
