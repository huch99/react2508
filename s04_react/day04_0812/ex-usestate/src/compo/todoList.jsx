import { useState } from "react";

export default function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const [todoText, setTodoText] = useState('');
    return (
        <>
            <div>
                <input type="text" value={todoText} onChange={(e) => { setTodoText(e.target.value) }} />
                <button onClick={() => {
                    if (todoText.trim() !== '') {
                        setTodoList([...todoList, todoText]);
                        setTodoText('');
                    }
                }}>
                    추가</button>

                <ul
                    style={{
                        width: '300px',
                        height: '300px',
                        border: '2px solid #000',
                        padding: '10px',
                        listStyleType: 'none'
                    }}
                >
                    {todoList.map((todo, index) => (
                        <li key={index}
                            style={{
                                borderBottom: '1px solid black',
                                padding: '10px',
                                textAlign: 'left'
                            }}
                        > {todo} <button 
                            style={{
                                float: 'right',
                                padding: 0
                            }}
                        onClick={() => {
                            const newList = todoList.filter((item) => item !== todo);
                            setTodoList(newList);
                        }}>
                            X</button> </li>

                    ))}
                </ul>
            </div>
        </>
    );
}