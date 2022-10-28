import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material';
import React from 'react'
import { AuthLayout } from '../../components/layouts';

const RegisterPage = () => {
  return (
    <AuthLayout title={'Ingresar'}>

        <Box sx={{width: 350, padding:'10px 20px'}}>

            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <Typography variant='h1' component='h1'>Registrarse</Typography>
                </Grid>

                <Grid item xs={12}>
                    <TextField label="Nombre" variant='filled' fullWidth />
                </Grid>

                <Grid item xs={12}>
                    <TextField label="Correo" variant='filled' fullWidth />
                </Grid>

                <Grid item xs={12}>
                    <TextField label="Contraseña" type="password" variant='filled' fullWidth />
                </Grid>

                <Grid item xs={12}>
                    <Button color="secondary" className="circular-btn" size="large" fullWidth>
                        Registrarse
                    </Button>
                </Grid>

                <Grid item xs={12} display="flex" justifyContent="end">
                    <Link href="/auth/login">
                        ¿Ya tienes cuenta?
                    </Link>
                </Grid>

            </Grid>
        </Box>
    </AuthLayout>
  )
}

export default RegisterPage