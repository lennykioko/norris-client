import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();
