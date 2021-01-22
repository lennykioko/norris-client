import React, { useState } from 'react';
import {
  Alert,
  AlertIcon,
  CloseButton
} from "@chakra-ui/react"

interface Props {
  errorMessage: string;
}

const Error: React.FC<Props> = ({ errorMessage }) => {
    const [displayError, setDisplayError] = useState<boolean>(true);

    console.log(errorMessage);

    return (
        <>
        {displayError ?
          <Alert status="error">
            <AlertIcon />
            There was an error processing your request. Please try again!
            <CloseButton position="absolute" right="8px" top="8px" onClick={() => setDisplayError(false)}/>
          </Alert>
        : "" }
        </>
    );
}

export default Error;
