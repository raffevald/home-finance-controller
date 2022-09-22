import { Router } from "./Router"
// import { ApolloProvider } from '@apollo/client';
// import { client } from "./lib/apollo";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './configs/store';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </Provider>
  )
}

export default App