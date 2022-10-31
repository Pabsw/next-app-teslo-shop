import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { AppBar, Toolbar, Link, Typography, Box, Button, IconButton, Badge, Input, InputAdornment } from '@mui/material';
import {ClearOutlined, SearchOutlined, ShoppingCartOutlined} from '@mui/icons-material'
import { UiContext } from '../../context';

export const Navbar = () => {

    const { asPath, push } = useRouter();
    const { toggleSideMenu } = useContext(UiContext);

    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false)

    const onSearchTerm = () => {
        if(searchTerm.trim().length === 0) return;
        push(`/search/${searchTerm}`);
    }

  return (
    <AppBar>
        <Toolbar>
            <Link href='/' display='flex' underline='none' alignItems='center'>
                <Typography variant='h6'>Teslo</Typography>
                <Typography sx={{ml: 0.5}}>| Shop</Typography>
            </Link>

            <Box flex={1}/>
    
            <Box className='fadeIn' sx={{display: isSearchVisible ? 'none' : {xs: 'none', sm: 'block'}}}>
                <Link href='/category/men'>
                    <Button color={ asPath === '/category/men' ? 'secondary':'primary'}>Hombre</Button>
                </Link>
                <Link href='/category/women'>
                    <Button color={ asPath === '/category/women' ? 'secondary':'primary'}>Mujer</Button>
                </Link>
                <Link href='/category/kid'>
                    <Button color={ asPath === '/category/kid' ? 'secondary':'primary'}>Niño</Button>
                </Link>
            </Box>

            <Box flex={1}/>

            {
                isSearchVisible
                    ? (
                        <Input
                            sx={{display: {xs: 'none', sm: 'flex'}}}
                            className='fadeIn'
                            autoFocus
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyUp={(e) => e.key === 'Enter' ? onSearchTerm() : null}
                            type='text'
                            placeholder="Buscar..."
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setIsSearchVisible(false)}
                                    >
                                        <ClearOutlined />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    )
                    : (
                        <IconButton 
                            className='fadeIn' 
                            onClick={() => setIsSearchVisible(true)}
                            sx={{display: {xs: 'none', sm: 'flex'}}}    
                        >
                            <SearchOutlined/>
                        </IconButton>
                    )
            }
            

            <IconButton
                sx={{display: {xs: 'flex', sm: 'none'}}}
                onClick={toggleSideMenu}
            >
                <SearchOutlined/>
            </IconButton>

            <Link href='/cart'>
                <IconButton>
                    <Badge badgeContent={2} color="secondary">
                        <ShoppingCartOutlined />
                    </Badge>
                </IconButton>
            </Link>

            <Button onClick={toggleSideMenu}>
                Menú
            </Button>
        </Toolbar>
    </AppBar>
  )
}
