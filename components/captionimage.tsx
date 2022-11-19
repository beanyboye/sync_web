import React from 'react'
import { Image, Box, Text } from "@chakra-ui/react"

interface ImageCap {
    path: string,           // parameter to insert a image to a Box object
    caption?: string        // insert text under the image inside the box
    fill?: boolean
    name?: string   
}

function ImageCap(props: ImageCap) {
    return (
        <Box style={{padding: '2em', margin: "0 auto"}}>
            <Image 
                alt='image' 
                borderRadius={props.fill ? 150 : 20}
                maxWidth={220} 
                src={props.path}
            />
            {props.caption && 
                <Text align='center' maxWidth={300} paddingTop="1em">
                    <i>"{props.caption}"<br></br></i>
                    {props.name && 
                    <b> - {props.name}</b>}
                </Text>
            }
        </Box>
    )
}

export default ImageCap