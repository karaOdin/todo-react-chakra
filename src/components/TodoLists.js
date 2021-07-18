import TodoItem from "./TodoItem";
import {Badge, Box, Flex, StackDivider, VStack} from "@chakra-ui/react";
import AddTodo from "./AddTodo";
import {useState} from "react";

const TodoLists = (props)=>{
    const [selectedTodoList, setSelectedTodoList] = useState('')
    const deleteTodoHandler = (todoSelected)=>{
        console.log('todo llist selected begin')
        console.log(todoSelected)
        // setSelectedTodoList(todoSelected)
        props.onDeleteTodoSeleced(todoSelected)
        // setSelectedTodoList(0)
    }

    if (!props.todos.length){
        return(<Badge colorScheme={"red"} m={4} p={4} isRound>
            You have empty todos list
        </Badge>)
    }

    return(
        <>

                <VStack
                    // spacing={2}
                    width="100%"
                    maxW={{base:'90vw', sm:"70vw", lg:'50vw', xl:"40vw"}}
                    borderRadius="lg" borderWidth={"1px"}
                    alignItems="stretch"
                    p={4}

                    divider={<StackDivider width="100%" alignSelf={"center"} color="gray.200"></StackDivider>}

                >
                    { props.todos.map((item) =>(
                        <TodoItem onDeleteTodo={deleteTodoHandler} id={item.id} title={item.text}></TodoItem>
                    ))}

                </VStack>


        </>
    )
}
export default TodoLists;