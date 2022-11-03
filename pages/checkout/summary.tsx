import { useContext, useEffect } from 'react';
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from '@mui/material';

import { ShopLayout } from '../../components/layouts/ShopLayout';
import { CartList, OrderSummary } from '../../components/cart';
import { CartContext } from '../../context/cart/CartContext';
import { countries } from '../../utils';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const SummaryPage = () => {

   const router = useRouter();
   const {shippingAddress, numberOfItems} = useContext(CartContext);

   useEffect(() => {
    if(!Cookies.get('firstName')){
        router.push('/checkout/address');
    } 
   }, [router])
   

   if(!shippingAddress){
        return <></>;
   }

  return (
    <ShopLayout title='Resumen de compra' pageDescription='Resumen de la compra'>
        <Typography variant='h1' component='h1'>Resumen de la compra</Typography>

        <Grid container>

            <Grid item xs={12} sm={7}>
                <CartList/>
            </Grid>

            <Grid item xs={12} sm={5}>

                <Card className='summary-card'>

                    <CardContent>
                        <Typography variant='h2'>Resumen ({numberOfItems} {numberOfItems === 1 ? 'producto' : 'productos'})</Typography>
                        <Divider sx={{my:1}} />

                        <Box display="flex" justifyContent='space-between'>
                            <Typography variant='subtitle1'>Dirección de entrega</Typography>
                            <Link href='/checkout/address'>
                                Editar dirección
                            </Link>
                        </Box>

                        <Typography>{shippingAddress.firstName}, {shippingAddress.lastName}</Typography>
                        <Typography>{shippingAddress.address} {shippingAddress.address2 ? `, ${shippingAddress.address2}` : ''}</Typography>
                        <Typography>{shippingAddress.city}, {shippingAddress.zip}</Typography>
                        <Typography>{shippingAddress.country}</Typography>
                        <Typography>{shippingAddress.phone}</Typography>
                        
                        <Divider sx={{my:1}} />

                        <Box display="flex" justifyContent='end'>
                            <Link href='/cart'>
                                Editar
                            </Link>
                        </Box>

                        <OrderSummary/>

                        <Box sx={{mt:3}}>
                            <Button color="secondary" className="circular-btn" fullWidth>
                                Confirmar compra
                            </Button>
                        </Box>
                    </CardContent>

                </Card>

            </Grid>

        </Grid>
        
    </ShopLayout>
  )
}

export default SummaryPage 