import {
  BrowserRouter, 
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import Query from './Page/Query';
import Mutation from './Page/Mutation';

function App() {

  return (
    <BrowserRouter>
      <Switch>
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
          </>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
