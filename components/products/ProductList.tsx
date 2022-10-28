import { FC, PropsWithChildren } from 'react';
import { Grid, Card, CardActionArea, Typography, CardMedia, Button, IconButton, Badge } from '@mui/material';
import { IProduct } from '../../interfaces';
import { ProductCard } from './ProductCard';


interface Props {
    products: IProduct[]
}


export const ProductList:FC<PropsWithChildren<Props>> = ({products}) => {
  return (
    <Grid container spacing={4}>
        {
            products.map(product => (
                <ProductCard 
                    key={product.slug}
                    product={product}
                />
            ))
        }
    </Grid>
  )
}
