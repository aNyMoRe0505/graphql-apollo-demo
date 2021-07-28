import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { ProductQuery } from '../queries';

const Product = () => {
  const { data } = useQuery(ProductQuery);

  return (
    <>
      <Link to="/">回 root</Link>
     <h1>Product!!</h1>
     <h2>all products</h2>
     {data?.products.map(p => (
       <div key={p.id}>
         <h1>{p.name}</h1>
         <div>
           {`all colors: ${p.colors.map(c => c.color).join(', ')}`}
         </div>
         <div>
           {`primary color: ${p.colors.find(c => c.isPrimary).color}`}
         </div>
       </div>
     ))}
    </>
  )
};

export default Product;