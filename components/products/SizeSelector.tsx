import { FC, PropsWithChildren } from 'react';
import { ISize } from '../../interfaces';
import { Box, Button } from '@mui/material';


interface Props {
    selectedSize?: ISize;
    sizes: ISize[];
    onSelectedSize: (size: ISize) => void;
}

export const SizeSelector:FC<PropsWithChildren<Props>> = ({ selectedSize, sizes, onSelectedSize }) => {
  return (
    <Box>
        {
            sizes.map(size=>(
                <Button 
                    key={size}
                    size='small'
                    color={selectedSize === size ? 'primary' : 'secondary'}
                    onClick={ () => onSelectedSize(size)}
                >{size}</Button>
            ))
        }
    </Box>
  )
}
