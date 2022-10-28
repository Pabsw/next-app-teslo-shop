import { ShopLayout } from '../../components/layouts/ShopLayout';
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from '@mui/material';
import { CartList, OrderSummary } from '../../components/cart';

const SummaryPage = () => {
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