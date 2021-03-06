import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';
import client from './apolloClient';
import reportWebVitals from './reportWebVitals';
import SimpleReactLightbox from 'simple-react-lightbox';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <>
        <ApolloProvider client={client}>
          <SimpleReactLightbox>
            <App />
          </SimpleReactLightbox>
        </ApolloProvider>
      </>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
