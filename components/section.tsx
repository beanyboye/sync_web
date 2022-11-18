import React from "react"
import { Card, Text, Heading } from "@chakra-ui/react"

interface SectionProps {
    title: string
    text: string
}

function Section(props: SectionProps) 
{
    return (
        <Card>
            <Heading>{props.title}</Heading>
            <Text>{props.text}</Text>
        </Card>
    )
}


export default Section