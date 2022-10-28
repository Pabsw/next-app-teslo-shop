import { ShopLayout } from '../../components/layouts/ShopLayout';
import { Grid, Typography, Chip, Link } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'


const columns: GridColDef[] = [

    {field: 'id', headerName: 'ID', width: 100},
    {field: 'fullName', headerName: 'Nombre Completo', width: 300},

    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra información si está pagada o no',
        width: 200,
        renderCell: (params: GridRenderCellParams) => {
            return (
                params.row.paid
                    ? <Chip color="success" label="Pagada" variant='outlined' />
                    : <Chip color="error" label="No pagada" variant='outlined' />
            )
        }
    },
    {
        field: 'order',
        headerName: 'Pedido',
        width: 200,
        renderCell: (params: GridRenderCellParams) => {
            return (
                <Link href={`/orders/${params.row.id}`}>
                    Ver Pedido
                </Link>
            )
        }
    },
];

const rows = [
    {id: 1, paid: true, fullName: 'Pablo Prueba'},
    {id: 2, paid: false, fullName: 'Pedro Prueba'},
    {id: 3, paid: true, fullName: 'Rosendo Prueba'},
    {id: 4, paid: false, fullName: 'Mario Prueba'},
    {id: 5, paid: false, fullName: 'Victor Prueba'},
    {id: 6, paid: false, fullName: 'Carles Prueba'},
]

const HistoryPage = () => {
  return (
    <ShopLayout title={'Historial de compras'} pageDescription={'Historial de compras'}>
        <Typography variant='h1'>Historial de compras</Typography>

        <Grid container>
            <Grid item xs={12} sx={{height:650, width: '100%'}}>
                <DataGrid 
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default HistoryPage