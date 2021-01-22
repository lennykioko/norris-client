import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams, Link } from "react-router-dom";
import { Box, Flex, Button, Text, Image, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from '@chakra-ui/icons';
import Loader from './Loader';
import Error from './Error';

const GET_JOKE = gql`
  query RandomJoke($category: String!) {
    randomJoke(category: $category) {
      id
      value
      icon_url
    }
}
`;

interface ParamTypes {
  category: string;
}

const Joke: React.FC = () => {
  const { category } = useParams<ParamTypes>();
  const [isFirstReq, setisFirstReq] = useState<boolean>(true);
  const { loading, error, data, refetch } = useQuery(GET_JOKE, {
    variables: { category },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    // Disable spinner loader for new joke requests
    if(data) setisFirstReq(false);
  }, [data]);

  return (
    <>
    <Link to="/">
      <IconButton colorScheme="teal" variant="outline" size="lg" aria-label="Back to Home Page" ml={3} icon={<ArrowBackIcon />} />
    </Link>
    <Box w="70%" h="24rem" mx="auto" mt="1.25rem" p={4} bg="gray.100" boxShadow="dark-lg" fontSize="xl" rounded="md">
      <Flex align="center" justify="center" direction="column">

        {loading && isFirstReq ? <Loader /> : ""}
        {error ? <Error errorMessage={error.message} /> : ""}

        {data && (
          <>
            <Image src={data.randomJoke.icon_url} alt="chuck norris icon" />
            <Text mt="1.25rem">{data.randomJoke.value}</Text>
            <Button colorScheme="teal" size="lg" variant="outline" href="#" mt="1.25rem" onClick={() => refetch()} isLoading={loading} loadingText="Submitting">New Joke</Button>
          </>
        )}
      </Flex>
    </Box>
    </>
  );
}

export default Joke;
