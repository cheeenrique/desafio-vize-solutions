/* Imports */
import { useContext, useState } from 'react';
import { AuthContext } from 'context/Auth';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

/* Imports CSS */
import { Container, Box, Item, ItemLogin, ItemLogo, TituloForm, Separator, Copyright } from './styles';

/* Imports Material UI */
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

/* Imports Images */
import loginBackground from '../../assets/images/login.png';
import logoLogin from '../../assets/images/logo-login.svg';

export default function LoginPage() {

  // Declaração de variáveis
  const navigate = useNavigate();
  const { authenticated, login, loading } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  // Se estiver logado redireciona para o dashboard
  if (authenticated) {
    navigate('/dashboard');
  }

  // Função de validação dos campo do formulário
  const validationSchema = yup.object({
    email: yup
      .string('Acesse com seu e-mail')
      .email('Entre com um e-mail válido')
      .required('Preenchimento obrigatório'),
    password: yup
      .string('Acesse com sua senha')
      .min(8, 'A senha precisa ter no mínimo 8 caracteres')
      .required('Preenchimento obrigatório'),
  });

  // Função de envio das informações do formulário para a API
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      login(values.email, values.password);
    },
  });

  // Função de exibir e esconder o campo de senha
  const handleClickShowPassword = () => {
    setShow(!show);
  };

  return (
    <Container>
      <Box>
        <Item>
          <img src={loginBackground} alt='Imagem de Login' />
        </Item>
        <ItemLogin>
          <ItemLogo>
            <img src={logoLogin} alt='Logo' />
          </ItemLogo>
          <TituloForm>
            <h4>Login</h4>
          </TituloForm>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                color='secondary'
                id='email'
                name='email'
                label='E-mail'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                fullWidth
                color='secondary'
                id='password'
                name='password'
                label='Senha'
                type={show ? 'text' : 'password'}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  endAdornment: 
                  <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    edge='end'
                  >
                    {show ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                  </InputAdornment>
                }}
              />
              <LoadingButton
                size='large'
                color='secondary'
                onClick={formik.handleSubmit}
                loading={loading}
                variant='contained'
                type='submit'
              >
                Acessar
              </LoadingButton>

              <Separator>
                <span>ou</span>
              </Separator>

              <Button
                size='large' 
                variant='contained'
                href='/register'
                color='secondary'
              >
                Registrar
              </Button>
              <Copyright>
                © 2022, Dashboard.
                <br />
                Desenvolvido por Carlos Henrique.
              </Copyright>
            </Stack>
          </form>
        </ItemLogin>
      </Box>
    </Container>
  );
}
