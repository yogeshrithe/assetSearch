import React from 'react'
// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography, Card, Box } from '@mui/material';
import { NavLink,Link, useNavigate } from 'react-router-dom';
// hooks

import { LoginForm } from '../sections/auth/login';
import RegisterForm from '../sections/auth/login/RegistrationForm';
import LoginBackground from '../components/assets/img/green-background.jpg'


// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  background: `url(${LoginBackground}) no-repeat`,
  backgroundSize: '100% 100%',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));


const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {

  const [login, setLogin] = React.useState(true)

  const navigate = useNavigate()

  const handleNavigate = (value) => {
    setLogin(value)
  }

  return (
    <>
      <StyledRoot>
        <Container maxWidth="sm">
          <StyledContent>
            <Card >
              <Container sx={{ mt: 4, mb: 4 }}>
                {login ? <Typography variant="h3" sx={{ textAlign: 'center', mb: 3 }} >
                  Login
                </Typography> : <Typography variant="h3" sx={{ textAlign: 'center', mb: 3 }} >
                  Register
                </Typography>}
                {login ? <LoginForm handleNavigate={handleNavigate}/> : <RegisterForm handleNavigate={handleNavigate} />}
              </Container>
            </Card>
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
