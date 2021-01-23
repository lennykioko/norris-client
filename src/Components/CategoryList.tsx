import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Flex, Text } from "@chakra-ui/react";
import Category from './Category';
import Loader from './Loader';
import Error from './Error';

const GET_CATEGORIES = gql`
  query Categories {
  categories
}
`;

const CategoryList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  return (
    <>
      <Text fontSize="2xl" textTransform="capitalize" ml="1.25rem">All Categories</Text>

      {loading ? <Loader /> : ""}
      {error ? <Error errorMessage={error.message} /> : ""}

      {data && (
        <>
          <Flex direction="row" wrap="wrap" justify="flex-start">
            {data.categories.map((cat: string) => <Category key={cat} category={cat} />)}
          </Flex>
        </>
      )}
    </>
  );
}

export default CategoryList;
