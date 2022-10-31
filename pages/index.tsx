import type { NextPage } from "next"
import { Typography } from '@mui/material';
import { ShopLayout } from '../components/layouts';
import { ProductList } from '../components/products/ProductList';
import { useProducts } from "../hooks";
import { FullScreenLoading } from "../components/ui";


const Home: NextPage = () => {

  const { products, isLoading } = useProducts('/products');

  return (
    <ShopLayout title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo Shop aquí'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>

      {
        isLoading
          ? <FullScreenLoading/>
          : <ProductList products={products} />
      }

      

    </ShopLayout>
  )
}

export default Home
