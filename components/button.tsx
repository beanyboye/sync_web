/****************** 
 By:                Callum Clegg

 Last Updated:      18/11/12
 Desc:              This file creates a button component used
                    for the navigation bar.
******************/

import React from 'react'
import {useRef} from 'react'
import { Button, ChakraProvider } from "@chakra-ui/react"

interface ButtonProps {
    placeholder: string
    background?: boolean
}

function CustomBtn(props: ButtonProps) {
    return (
        <ChakraProvider>
            <Button size='sm' background={props.background ? '#9A98CC' : 'white'}>
                {props.placeholder}
            </Button>
        </ChakraProvider>
    )
}

export default CustomBtn;