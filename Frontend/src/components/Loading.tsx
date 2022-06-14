import { Box, Spinner } from "@chakra-ui/react";

const Loading = () => {
    return(
        <Box
            position="absolute"
            top="0"
            left="0"
            height="100vh"
            width="100vw"
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor="#80808080"
            zIndex="99999999999"
            >
            <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            />
        </Box>
    )
}

export default Loading;