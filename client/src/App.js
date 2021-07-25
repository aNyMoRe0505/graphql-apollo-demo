import { useQuery } from '@apollo/client';

import { BannersQuery } from './queries/Banner';

function App() {
  const { loading, data } = useQuery(BannersQuery);

  console.log('loading', loading);
  console.log('data', data);

  return (
    <div>
      hello
    </div>
  );
}

export default App;
