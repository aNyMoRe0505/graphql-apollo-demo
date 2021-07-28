import {
  BrowserRouter, 
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import Query from './Page/Query';
import Mutation from './Page/Mutation';
import Product from './Page/Product';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/mutation">
          <Mutation />
        </Route>
        <Route path="/query">
          <Query />
        </Route>
        <Route path="/">
          <>
            <h1>我是 Root</h1> 
            <Link to="/query">前往Query</Link>
            <Link to="/mutation">前往Mutation</Link>
            <Link to="/product">前往Product</Link>
          </>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
