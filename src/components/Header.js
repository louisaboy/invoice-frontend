import {
    Box,
    Grid
  } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

function Header () {
    return (
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <ColorModeSwitcher justifySelf="flex-end" />
            </Grid>
        </Box>
    )
}

export default Header;