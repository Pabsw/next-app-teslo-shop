import { ShopLayout } from '../../components/layouts';
import { Typography } from '@mui/material';
import { FullScreenLoading } from '../../components/ui';
import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks';
import { NextPage } from 'next';

const WomenPage: NextPage = () => {

    const { products, isLoading } = useProducts('/products?gender=women');
  
    return (
      <ShopLayout title={'Women'} pageDescription={'Productos para mujeres'}>
        <Typography variant='h1' component='h1'>Women</Typography>
  
        {
          isLoading
            ? <FullScreenLoading/>
            : <ProductList products={products} />
        }
  
        
  
      </ShopLayout>
    )
}

export default WomenPage