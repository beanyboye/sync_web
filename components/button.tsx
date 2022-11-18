/****************** 
 By:                Callum Clegg

 Last Updated:      18/11/12
 Desc:              This file creates a button component used
                    for the navigation bar.
******************/

import React, {FC} from 'react'
import {useRef} from 'react'
import { Button } from "@chakra-ui/react"

interface ButtonProps {
    placeholder: string
    background?: boolean
}

function CustomBtn(props: ButtonProps) {
    return (
        <Button size='sm' background={props.background ? 'teal' : 'white'}>
            {props.placeholder}
        </Button>
    )
}

export default CustomBtn;