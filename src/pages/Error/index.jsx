/* eslint-disable indent */

// Imports
import { Link } from 'react-router-dom';

// Imports CSS
import { Container, Box, Title } from './styles';

/* Imports Images */
import notFound from '../../assets/images/notfound.svg';

export default function Error(){
    return(
        <Container>
          <Box>
            <img src={notFound} alt='Not found' />
            <Title>
                Página não encontrada!
            </Title>
            <Link to="/">
                Voltar para o dashboard
            </Link>
          </Box> 
        </Container>
    );
}
