import React from "react"
import { Card, Text, Heading, HStack, Image } from "@chakra-ui/react"

interface SectionProps {
    title: string
    text: string
    id: string
    src?: string
    orientation?: boolean 
}

function Section(props: SectionProps) 
{
    return (
        <HStack id={props.id} flexDirection={props.orientation ? 'row' : 'row-reverse'} maxWidth={['100%', '80%', '50%']}>
            <Card style={{padding: '0 2em'}}>
                <Heading>{props.title}</Heading>
                <Text>{props.text}</Text>
            </Card>
            <Image 
                alignContent={props.orientation ? 'left' : 'right'} 
                src={props.src}

                maxHeight={'50vh'}
                width={'20vw'}
            />
        </HStack>
    )
}


export default Section