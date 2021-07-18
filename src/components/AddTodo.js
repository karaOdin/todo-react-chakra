import {Button, Flex, HStack, Input, toast, useToast} from "@chakra-ui/react";
import {useState} from "react";


const AddTodo = (props) => {
    const [text, setText] = useState('');
    const nameHandler = (event) =>{
        setText(event.target.value)
        console.log(text)
    }
    const toast = useToast()

    const handleSubmit= (event) =>{
        event.preventDefault()
        if (!text){
            return(
                toast(
                    {
                        title:'No Content',
                        description: 'You can\'t add empty text',
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                    }
                )
            )
        }
        props.onSaveTodo(text)
        setText('')
    }
    return(
      <>
        <form>
            <HStack mt="8">
                <Input  onChange={nameHandler} value={text} variant={"filled"}></Input>
                <Button  type="submit" bg="pink.500" color={"white"} onClick={handleSubmit}>Add todo</Button>
            </HStack>
        </form>
      </>
    );
}

export default AddTodo;