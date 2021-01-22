import React from 'react';
import { Box, Text } from "@chakra-ui/react";


const Header: React.FC = () => {
    return (
        <Box w="100%" h="3rem" mb="1.25rem" p={4} bg="gray.100" rounded="md">
            <Text fontSize="xl" fontWeight="semibold">Chuck Norris</Text>
        </Box>
    );
}

export default Header;
