import { ShopLayout } from '../../components/layouts';
import { Typography } from '@mui/material';
import { FullScreenLoading } from '../../components/ui';
import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks';
import { NextPage } from 'next';


const KidPage: NextPage = () => {

    const { products, isLoading } = useProducts('/products?gender=kid');
  
    return (
      <ShopLayout title={'Kids'} pageDescription={'Productos para niños'}>
        <Typography variant='h1' component='h1'>Kid</Typography>
  
        {
          isLoading
            ? <FullScreenLoading/>
            : <ProductList products={products} />
        }
  
        
  
      </ShopLayout>
    )
}

export default KidPage