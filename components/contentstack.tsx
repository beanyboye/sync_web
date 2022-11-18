import React, {FC} from 'react'
import { HStack, Image, Box, Text } from "@chakra-ui/react"
import ImageCap from "./captionimage"

interface StackProps {
    children: React.ReactNode
}

function ContentStack(props: StackProps) {
    return (
        <HStack spacing='24px'align='center'>
            {props.children}
        </HStack>
    )
}

export default ContentStack