/* eslint-disable semi */
/* eslint-disable indent */

// Imports
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from 'context/Auth';
import { api } from 'services/api';

// Imports CSS
import { Container, Box, BoxHeader, BoxBreadcrumbs, BoxAction } from './styles';

// Imports Components
import Header from 'components/Header';

// Imports Material UI
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

export default function Users(){
    
    // Declaração de variáveis
    const { user, expiredToken } = useContext(AuthContext);
    const [list, setList] = useState([]);
    const [searchTable, setSearchTable] = useState('');

    // Declara o token de autenticação do usuário logado
    api.defaults.headers.Authorization = `Bearer ${user.Token}`;

    // Lista os usuários da página 1
    useEffect(() => {
        async function loadList() {
            try {
              const response = await api.get('/api/users?page=1');
              setList(response.data.data);
            } catch (error) {
              expiredToken();
            }
          }

        loadList();
    }, []);

    // Filtra os dados de nome da tabela em tempo real
    const filteredData = list.filter((e) => {
        if (searchTable === '') {
            return e;
        } else {
            return e.name.toLowerCase().includes(searchTable)
        }
    })
    
    // Estilos CSS editável da Tabela
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: '600',
          backgroundColor: '#FFFFFF',
          color: '#000000',
        },
        [`&.${tableCellClasses.body}`]: {
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 14,
        },
      }));
      
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    }));

    return(
        <>
            <Header />
            <Container>
                <Box>
                    <BoxHeader>
                        <BoxBreadcrumbs>
                            <Breadcrumbs aria-label='breadcrumb'>
                                <Typography style={{fontSize: '18px', fontWeight: '600', color: '#1D3456' }}>Lista</Typography>
                                <Typography style={{fontSize: '18px', fontWeight: '400', color: '#461978' }}>Usuário</Typography>
                            </Breadcrumbs>
                            <span>Veja os usuários cadastrados</span>
                        </BoxBreadcrumbs>
                        <BoxAction>
                            <Stack direction='row' spacing={2}>
                                <TextField 
                                    id='outlined-basic'
                                    label='Buscar por Nome'
                                    variant='outlined'
                                    value={searchTable}
                                    onChange={ (e) => setSearchTable(e.target.value) }
                                />
                            </Stack>
                        </BoxAction>
                    </BoxHeader>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Id</StyledTableCell>
                                    <StyledTableCell>Nome</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {(filteredData).map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell component='th' scope='row'>{row.id}</StyledTableCell>
                                    <StyledTableCell>{row.name}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Box>
            </Container>
        </>
    );
}
