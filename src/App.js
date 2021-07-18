import logo from './logo.svg';
import './App.css';
import {Badge, Box, Button, Flex, Heading, IconButton, Text, useColorMode, VStack} from "@chakra-ui/react";
import TodoLists from "./components/TodoLists";
import AddTodo from "./components/AddTodo";
import NavBar from "./components/NavBar";
import {FaSun} from "react-icons/all";
import {useState} from "react";

function App() {
    const { colorMode, toggleColorMode } = useColorMode()

    const items = [
        {
            id:1,
            text: "wake up"
        },
        {
            id:2,
            text: "eat"
        },
        {
            id:3,
            text: "sleep"
        }

    ]

    const [todos, setTodos]= useState(items)
    const saveTodo = (todo)=>{
        const newTodo = {
            text: todo,
            id: Math.random().toString()
        }
        setTodos((prevTodos)=>{
            return [newTodo, ...prevTodos]
        });
        console.log('newTodo')
        console.log(newTodo)

    }

    const [selectedTodoDelete, setSelectedTodoDelete] = useState(false)
    const deleteTodoSelected = (todoSelected) =>
    {

        setSelectedTodoDelete(todoSelected)
        console.log('selected todo begin')
        console.log(selectedTodoDelete)

        const index = todos.filter(todo => todo.id !== todoSelected)
        // const state = todos.splice(index.id,1)

        console.log('index begin')
        console.log(index)

            setTodos(index)





    }

  return (



    <>
        <VStack p={4}>
            <IconButton icon={<FaSun></FaSun>} alignSelf={"flex-end"}
                        onClick={toggleColorMode}
                        isRound>
                Toggle {colorMode === "light" ? "Dark" : "Light"}</IconButton>
           <Box>
               <Heading
                   bgGradient="linear(to-r, red.500, pink.500, blue.500)"
                   bgClip={"text"}

                   size={"2xl"}
                   fontWeight={"extrabold"}
                   mb="10"
               >
                   to do Application
               </Heading>
           </Box>
            <TodoLists onDeleteTodoSeleced={deleteTodoSelected} todos={todos}></TodoLists>
            <AddTodo onSaveTodo={saveTodo}></AddTodo>
        </VStack>

    </>
  );
}

export default App;
