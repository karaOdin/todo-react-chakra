import {Box, Flex, Heading, HStack, IconButton, Spacer, StackDivider, Text} from "@chakra-ui/react";
import {FaTrash} from "react-icons/all";
import {useState} from "react";

const TodoItem = (props)=>{
    const [selectedTodo, setSelectedTodo] = useState(props.id)
    const deleteHandler = () => {
        props.onDeleteTodo(props.id)
        // // setSelectedTodo(0)

    }
    return(
        <>
            <HStack
                p={2}
            >
                <Text >{props.title}</Text>
                <Spacer></Spacer>
                <IconButton icon={<FaTrash></FaTrash>} onClick={deleteHandler} alignSelf={"flex-end"} isRound></IconButton>
            </HStack>
        </>
    );
}

export default TodoItem;