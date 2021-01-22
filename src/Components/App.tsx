import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import CategoryList from './CategoryList';
import Header from './Header';
import Joke from './Joke';

const App: React.FC = () => {
  return (
    <ChakraProvider resetCSS={true} theme={extendTheme({fonts: {body: 'Roboto Condensed'}})}>
      <Header />
      <Switch>
        <Route exact path="/" component={CategoryList} />
        <Route path="/joke/:category" component={Joke} />
      </Switch>
    </ChakraProvider>
  );
}

export default App;
