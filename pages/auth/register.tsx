import { useState, useContext } from 'react';
import { GetServerSideProps } from 'next';
import { Box, Grid, Typography, TextField, Button, Link, Chip } from '@mui/material';
import { AuthLayout } from '../../components/layouts';
import { useForm } from 'react-hook-form';
import { ErrorOutline } from '@mui/icons-material';
import { validations } from '../../utils';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context';
import { signIn, getSession } from 'next-auth/react';

type FormData = {
    email: string;
    password: string;
    name: string;
};


const RegisterPage = () => {

    const router = useRouter();
    const { registerUser } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onRegisterUser = async({email,password,name}: FormData) => {

        setShowError(false);
        const {hasError, message} = await registerUser( name, email, password);

        if(hasError){
            setShowError(true);
            setErrorMessage(message!);
            setTimeout(() => setShowError(false), 3000);
            return;
        }
        
        /*const destination = router.query.p?.toString() || '/';
        router.replace(destination);*/

        await signIn('credentials', {email, password});
    }

  return (
    <AuthLayout title={'Ingresar'}>

        <form onSubmit={handleSubmit(onRegisterUser)}>

            <Box sx={{width: 350, padding:'10px 20px'}}>

                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <Typography variant='h1' component='h1'>Registrarse</Typography>
                        <Chip 
                            label='No reconocemos ese correo / contraseña'
                            color='error'
                            icon={<ErrorOutline/>}
                            className='fadeIn'
                            sx={{display: showError ? 'flex' : 'none'}}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField 
                            label="Nombre" 
                            variant='filled' 
                            fullWidth 
                            {...register('name', {
                                required: 'Este campo es requerido'
                            })}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField 
                            type='email'
                            label="Correo" 
                            variant='filled' 
                            fullWidth
                            {...register('email', {
                                required: 'Este campo es requerido',
                                validate: validations.isEmail
                            })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField 
                            label="Contraseña" 
                            type="password" 
                            variant='filled' 
                            fullWidth
                            {...register('password', {
                                required: 'Este campo es requerido',
                                minLength: {value: 6, message: 'Mínimo 6 caracteres'}
                            })}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                         />
                    </Grid>

                    <Grid item xs={12}>
                        <Button type='submit' color="secondary" className="circular-btn" size="large" fullWidth>
                            Registrarse
                        </Button>
                    </Grid>

                    <Grid item xs={12} display="flex" justifyContent="end">
                        <Link href={router.query.p ? `/auth/login?p=${router.asPath}` : 'auth/login'}>
                            ¿Ya tienes cuenta?
                        </Link>
                    </Grid>

                </Grid>
            </Box>
        </form>
    </AuthLayout>
  )
}


export const getServerSideProps: GetServerSideProps = async ({req, query}) => {

    const session = await getSession({req});

    const { p = '/' } = query;

    if(session){
        return {
            redirect: {
                destination: p.toString(),
                permanent: false
            }
        }
    }

    return {
        props: {
            
        }
    }
}

export default RegisterPage