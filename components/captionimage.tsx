import React from 'react'
import { Image, Box, Text } from "@chakra-ui/react"

interface ImageCap {
    path: string,           // parameter to insert a image to a Box object
    caption?: string         // insert text under the image inside the box
}

function ImageCap(props: ImageCap) {
    return (
        <Box style={{padding: '5em 0'}}>
            <Image borderRadius={10} objectFit='cover' maxWidth={220} src={props.path}/>
            {props.caption && <Text>{props.caption}</Text> }
        </Box>
    )
}

export default ImageCap