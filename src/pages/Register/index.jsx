/* Imports */
import { useContext, useState } from 'react';
import { AuthContext } from 'context/Auth';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

/* Imports CSS */
import { Container, Box, Item, ItemLogin, ItemLogo, TituloForm, BoxVoltarLogin, Copyright, } from './styles';

/* Imports Yup */
import * as yup from 'yup';

/* Imports Material UI */
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

/* Imports Images */
import bannerRegister from '../../assets/images/login.png';
import logoRegister from '../../assets/images/logo-login.svg';

export default function Login() {

  // Declaração de variáveis
  const { register, loading } = useContext(AuthContext);
  const [show, setShow] = useState(false);

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
    name: yup
      .string('Digite seu nome')
      .required('Preenchimento obrigatório'),
  });

  // Função de envio das informações do formulário para a API
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      register(values.email, values.password, values.name);
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
          <img src={bannerRegister} alt="Imagem de Registro" />
        </Item>
        <ItemLogin>
          <ItemLogo>
            <img src={logoRegister} alt="Logo" />
          </ItemLogo>
          <TituloForm>
            <h4>Registro</h4>
          </TituloForm>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Nome"
                color='secondary'
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                fullWidth
                id="email"
                name="email"
                label="E-mail"
                color='secondary'
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
                size="large"
                color='secondary'
                onClick={formik.handleSubmit}
                loading={loading}
                variant="contained"
                type="submit"
              >
                Enviar
              </LoadingButton>
              <BoxVoltarLogin>
                <Link to="/">Voltar para login</Link>
              </BoxVoltarLogin>
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
