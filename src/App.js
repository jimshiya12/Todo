import React, {useState,useEffect} from 'react';
import './App.css';
//import components
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';



function App() {

  const[inputText,setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodo, setFilterTodo] = useState([]);
  useEffect(() =>{
    getLocalTodos();
  },[]);
  useEffect(() =>{
    filterHandler();
    saveLocalTodos();
  },[todos, status]);
  
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilterTodo(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodo(todos.filter(todo => todo.completed === false));
        break;
        default:
          setFilterTodo(todos);
          break;
    }
  };


  //save to local
  const saveLocalTodos = () =>{
      localStorage.setItem('todos' , JSON.stringify(todos));
  }
  const getLocalTodos = () =>{
    if(localStorage.getItem('todos')=== null){
      localStorage.setItem('todos' , JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);

    }

  }
  return (
    <div className="App">
      <header> <h1>What is the Plan for Today?</h1></header>
      <TodoForm inputText ={inputText}  
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus= {setStatus}
      />
      <TodoList 
      filterTodo ={filterTodo}
      setTodos={setTodos} 
      todos={todos} />
    </div>
  );
}

export default App;
