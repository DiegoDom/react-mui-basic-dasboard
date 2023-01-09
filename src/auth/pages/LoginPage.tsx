import { Box, Typography, Grid, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AppLogo } from '~/components';

import { validations } from '~/helpers';

type FormData = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onLoginUser = ({ email, password }: FormData) => {
    console.log({ email, password });
    navigate('/');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onLoginUser)} noValidate>
        <Box
          sx={{
            width: 450,
            padding: '30px 20px',
            borderRadius: 3,
          }}
          className='summary-card'
        >
          <Box display='flex' justifyContent='center' padding={2}>
            <AppLogo />
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h1' component='h1'>
                Iniciar sesión
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                type='email'
                label='Correo electrónico'
                variant='filled'
                fullWidth
                autoComplete='new-email'
                {...register('email', {
                  required: 'Ingrese su correo electrónico',
                  validate: (val) => validations.isEmail(val),
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type='password'
                label='Contraseña'
                variant='filled'
                fullWidth
                {...register('password', {
                  required: 'Ingrese su contraseña',
                  minLength: { value: 6, message: 'Contraseña inválida' },
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type='submit'
                color='secondary'
                className='circular-btn'
                size='large'
                fullWidth
              >
                Ingresar
              </Button>
            </Grid>
            {/* <Grid item xs={12} display='flex' justifyContent='flex-end'>
              <Link underline='always'>¿Aún no tienes cuenta? registrate</Link>
            </Grid> */}
          </Grid>
        </Box>
      </form>
    </>
  );
};
