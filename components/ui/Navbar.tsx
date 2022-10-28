import { AppBar, Toolbar, Link, Typography, Box, Button, IconButton, Badge } from '@mui/material';
import {SearchOutlined, ShoppingCartOutlined} from '@mui/icons-material'

export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
            <Link href='/' display='flex' underline='none' alignItems='center'>
                <Typography variant='h6'>Teslo</Typography>
                <Typography sx={{ml: 0.5}}>| Shop</Typography>
            </Link>

            <Box flex={1}/>
    
            <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                <Link href='/category/men'>
                    <Button>Hombre</Button>
                </Link>
                <Link href='/category/women'>
                    <Button>Mujer</Button>
                </Link>
                <Link href='/category/kid'>
                    <Button>Niño</Button>
                </Link>
            </Box>

            <Box flex={1}/>

            <IconButton>
                <SearchOutlined/>
            </IconButton>

            <Link>
                <IconButton>
                    <Badge badgeContent={2} color="secondary">
                        <ShoppingCartOutlined />
                    </Badge>
                </IconButton>
            </Link>

            <Button>
                Menú
            </Button>
        </Toolbar>
    </AppBar>
  )
}
