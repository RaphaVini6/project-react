import { useState } from 'react';

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Fazer a cama',
            category: 'home',
            isCompleted: false,
        },
        {
            id: 2,
            title: 'Estudar React',
            category: 'study',
            isCompleted: false,
        },
        {
            id: 3,
            title: 'Treinar',
            category: 'gym',
            isCompleted: false,
        },
    ]);

    // Função para marcar um todo como completo
    const markCompleted = (id) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, isCompleted: !todo.isCompleted };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    // Função para remover um todo
    const removeTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    };

    return (
        <div className='app'>
            <h1>Afazeres</h1>
            <div className="todo-list">
                {todos.map(todo => (
                    <div key={todo.id} className='todo' style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
                        <div className='content'>
                            <p>{todo.title}</p>
                            <p className='category'>{todo.category}</p>
                        </div>
                        <div className='actions'>
                            <button onClick={() => markCompleted(todo.id)}>Feito</button>
                            <button onClick={() => removeTodo(todo.id)}>Apagar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
