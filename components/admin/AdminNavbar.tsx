import { useContext } from 'react';
import { AppBar, Toolbar, Link, Typography, Box, Button } from '@mui/material';
import { UiContext } from '../../context';

export const AdminNavbar = () => {

    const { toggleSideMenu } = useContext(UiContext);

  return (
    <AppBar>
        <Toolbar>
            <Link href='/' display='flex' underline='none' alignItems='center'>
                <Typography variant='h6'>Teslo</Typography>
                <Typography sx={{ml: 0.5}}>| Shop</Typography>
            </Link>

            <Box flex={1}/>

            <Button onClick={toggleSideMenu}>
                Menú
            </Button>
        </Toolbar>
    </AppBar>
  )
}
