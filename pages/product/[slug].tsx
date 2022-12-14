import { PropsWithChildren, createContext, useState, useContext } from 'react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { Grid, Box, Typography, Button, Chip } from '@mui/material';
import { ProductSlideshow } from '../../components/products';
import { ItemCounter } from '../../components/ui';
import { SizeSelector } from '../../components/products/SizeSelector';
import { IProduct } from '../../interfaces';
import { dbProducts } from '../../database';
import { ICartProduct } from '../../interfaces/cart';
import { ISize } from '../../interfaces/products';
import { useRouter } from 'next/router';
import { CartContext } from '../../context/cart/CartContext';


interface Props {
  product: IProduct
}


const ProductPage:NextPage<PropsWithChildren<Props>> = ({product}) => {

  const router = useRouter();
  const { addProductToCart } = useContext(CartContext);

  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    size: undefined,
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    quantity: 1,
  });

  const selectedSize = (size: ISize) => {
    setTempCartProduct(currentProduct => ({
      ...currentProduct,
      size
    }));
  }

  const onUpdatedQuantity = (quantity: number) => {
    setTempCartProduct(currentProduct => ({
      ...currentProduct,
      quantity
    }));
  }

  const onAddProduct = () => {
    if(!tempCartProduct.size) {return;}

    addProductToCart(tempCartProduct);
    router.push('/cart');
  }


  return (
    <ShopLayout title={product.title} pageDescription={product.description}>

      <Grid container spacing={3}>

        <Grid item xs={12} sm={7}>
          <ProductSlideshow images={product.images}/>
        </Grid>

        <Grid item xs={12} sm={5}>

          <Box display='flex' flexDirection='column'>

            <Typography variant='h1' component='h1'>{product.title}</Typography>
            <Typography variant='subtitle1' component='h2'>{`$${product.price}`}</Typography>

            <Box sx={{my: 2}}>
              <Typography variant='subtitle2'>Cantidad</Typography>

              <ItemCounter
                currentValue={tempCartProduct.quantity}
                updatedQuantity={ onUpdatedQuantity }
                maxValue={product.inStock > 10 ? 10: product.inStock}
              />

              <SizeSelector 
                sizes={product.sizes}
                selectedSize={tempCartProduct.size}
                onSelectedSize={ (size) => selectedSize(size)}
              />
            </Box>

            

           { 
              (product.inStock > 0)
                ? (
                  <Button color="secondary" className='circular-btn' onClick={onAddProduct}>
                    {
                      tempCartProduct.size
                        ? 'Agregar al carrito'
                        : 'Seleccione una talla'
                    }
                  </Button>
                ) : (
                  <Chip label="No hay disponibles" color="error" variant="outlined"/>
                )
            } 
            <Box sx={{mt:3}}>

              <Typography variant='subtitle2'>Descripci??n</Typography>
              <Typography variant='body2'>{product.description}</Typography>
            </Box>

          </Box>

        </Grid>

      </Grid>

    </ShopLayout>
  )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const product = await dbProducts.getAllProductSlugs();


  return {
    paths: product.map( ({slug}) => ({
      params: {
        slug
      }
    })),
    fallback: 'blocking'
  }
}


export const getStaticProps: GetStaticProps = async ({params}) => {

  const {slug=''} = params as {slug: string};
  const product = await dbProducts.getProductsBySlug(slug);

  if(!product){
    return{
      redirect: {
          destination: '/',
          permanent: false
      }
    }
  }

  return {
    props: {
        product
    },
    revalidate: 86400
  }
}

/*export const getServerSideProps: GetServerSideProps = async ({params}) => {

  const {slug} = params as {slug:string};
  const product = await dbProducts.getProductsBySlug(slug);

  if(!product){
    return{
      redirect: {
          destination: '/',
          permanent: false
      }
    }
  }

  return {
    props: {
        product
    }
  }
}*/



export default ProductPage