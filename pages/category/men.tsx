import { ShopLayout } from '../../components/layouts';
import { Typography } from '@mui/material';
import { FullScreenLoading } from '../../components/ui';
import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks';
import { NextPage } from 'next';

const MenPage: NextPage = () => {

    const { products, isLoading } = useProducts('/products?gender=men');
  
    return (
      <ShopLayout title={'Men'} pageDescription={'Productos para hombre'}>
        <Typography variant='h1' component='h1'>Men</Typography>
  
        {
          isLoading
            ? <FullScreenLoading/>
            : <ProductList products={products} />
        }
  
        
  
      </ShopLayout>
    )
}

export default MenPage