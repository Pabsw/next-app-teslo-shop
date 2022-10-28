import { ShopLayout } from '../../components/layouts/ShopLayout';
import { Box, Card, CardContent, Chip, Divider, Grid, Link, Typography } from '@mui/material';
import { CartList, OrderSummary } from '../../components/cart';
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';

const OrderPage = () => {
  return (
    <ShopLayout title='Resumen del pedido 321312312' pageDescription='Resumen del pedido'>
        <Typography variant='h1' component='h1'>Orden: 123ABC</Typography>

        <Chip 
            sx={{my:2}}
            label="Pendiente de pago"
            variant='outlined'
            color="error"
            icon={<CreditCardOffOutlined />}
        />
        <Chip 
            sx={{my:2}}
            label="Pagada"
            variant='outlined'
            color="success"
            icon={<CreditScoreOutlined />}
        />

        <Grid container>

            <Grid item xs={12} sm={7}>
                <CartList/>
            </Grid>

            <Grid item xs={12} sm={5}>

                <Card className='summary-card'>

                    <CardContent>
                        <Typography variant='h2'>Resumen (3 productos)</Typography>
                        <Divider sx={{my:1}} />

                        <Box display="flex" justifyContent='space-between'>
                            <Typography variant='subtitle1'>Dirección de entrega</Typography>
                            <Link href='/checkout/address'>
                                Editar dirección
                            </Link>
                        </Box>

                        <Typography>Pablo Prueba</Typography>
                        <Typography>Plaza Beatriz Civera</Typography>
                        <Typography>Patio 3</Typography>
                        <Typography>Valencia, España</Typography>

                        <Divider sx={{my:1}} />

                        <Box display="flex" justifyContent='end'>
                            <Link href='/cart'>
                                Editar
                            </Link>
                        </Box>

                        <OrderSummary/>

                        <Box sx={{mt:3}}>
                            <h1>Pagar</h1>
                            <Chip 
                                sx={{my:2}}
                                label="Pendiente de pago"
                                variant='outlined'
                                color="error"
                                icon={<CreditCardOffOutlined />}
                            />
                            <Chip 
                                sx={{my:2}}
                                label="Pagada"
                                variant='outlined'
                                color="success"
                                icon={<CreditScoreOutlined />}
                            />
                        </Box>
                    </CardContent>

                </Card>

            </Grid>

        </Grid>
        
    </ShopLayout>
  )
}

export default OrderPage 