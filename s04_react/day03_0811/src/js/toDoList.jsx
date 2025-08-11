import { useState } from "react";

export default function ToDoList() {
    const [toDoList, setToDoList] = useState([]);
    const [toDoText, setToDoText] = useState('');

    return (
        <>
            <h3>todolist</h3>
            <input type="text" value={toDoText} onChange={(e) => setToDoText(e.target.value)} />
            <button
                onClick={() => {
                if (toDoText.trim() !== '') {
                    setToDoList([...toDoList, toDoText]);
                    setToDoText('');
                }}}
                >
                    추가
                    </button>
            <div>
                <ul>
                {toDoList.map((toDo, index) => (
                    <li key={index}>{toDo} <button onClick={() => {
                        const remove = toDoList.filter((_, i) => i !== index);
                        setToDoList(remove);
                    }}>삭제</button></li>
                    
                ))}
                </ul>
            </div>
        </>
    );
}