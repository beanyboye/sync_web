/****************** 
 By:                Callum Clegg

 Last Updated:      18/11/12
 Desc:              This file creates a navbar component
                    for the webapp.
******************/

import React, { FC } from 'react'
import CustomBtn from '../components/button'
import { ChakraProvider, IconButtonProps, Stack } from '@chakra-ui/react'


type NavProps = {
    children: React.ReactNode
    buttons: Array<typeof CustomBtn>
};

export function NavBar(props: NavProps)
{
    return (
        <Stack spacing={4} direction='row' align='center'>
            <CustomBtn placeholder='home' background={true} />
            <CustomBtn placeholder='price' background={true} />
            <CustomBtn placeholder='about' background={false} />
        </Stack>
    )
}

export default NavBar;