import React from 'react'
import { Image, Box, Text } from "@chakra-ui/react"

interface ImageCap {
    path: string,           // parameter to insert a image to a Box object
    caption?: string         // insert text under the image inside the box
}

function ImageCap(props: ImageCap) {
    return (
        <Box>
            <Image borderRadius="fill" objectFit='cover' boxSize='200px' src={props.path}/>
            {props.caption && <Text>{props.caption}</Text> }
        </Box>
    )
}

export default ImageCap