import React from 'react';
import { Link } from "react-router-dom";
import { Center, Text } from "@chakra-ui/react";

interface Props {
    category: string;
    key?: string | number;
}

const Category: React.FC<Props> = ({ category }) => {
    return (
        <Center w="10rem" h="10rem" m="1.25rem" p={4} bg="gray.100" boxShadow="md" rounded="md">
            <Link to={`/joke/${category}`}>
                <Text fontSize="3xl" textTransform="capitalize">{category}</Text>
            </Link>
        </Center>
    );
}

export default Category;
