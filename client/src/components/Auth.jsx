import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const initialState = {
  fullName:'',
  username:'',
  password:'',
  confirmPassword:'',
  phoneNumber:'',
  avatarURL:'',
}

const theme = createTheme();

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState(initialState);

  // const handleChange = (e) => {
  //   setForm({...FormData, [e.target.name]:e.target.value})
  //   console.log(form)
  // }
  const handleChange = () => {}

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const data = new FormData(e.currentTarget);
    console.log(data.get('username'))
  }
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  }

  function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Jianbo Yang
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="xs">
      <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Typography>
            <Box component="form" onSubmit = {handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                {isSignup && (
                  <Grid item xs={12} sm={6}>
                      <TextField
                          name="firstName"
                          placeholder="First Name"
                          onChange={handleChange}
                          required
                          fullWidth
                          autoFocus
                          label="First Name"
                          />
                      </Grid>
                )}
                {isSignup && (
                  <Grid item xs={12} sm={6}>
                      <TextField
                          name="lastName"
                          placeholder="Last Name"
                          onChange={handleChange}
                          required
                          fullWidth
                          autoFocus
                          label="Last Name"
                          />
                      </Grid>
                )}
                {isSignup && (
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                )}
                <Grid item xs={12}>
                  <TextField
                      name="username"
                      type="text"
                      placeholder="Username"
                      onChange={handleChange}
                      required
                      fullWidth
                      label="Username"
                      />
                </Grid>


                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                {isSignup && (
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="comfirmPassword"
                      label="Comfirm Password"
                      type="password"
                      id="confirmPassword"
                      autoComplete="new-password"
                    />
                  </Grid>
                )}
                {isSignup && (
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="avatorUrl"
                      label="Avator Url"
                      type="text"
                      id="avatorUrl"
                    />
                  </Grid>
                )}
              </Grid>
              <Button
                type="submit"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
                variant="contained"
              >
                {isSignup ? "Sign Up" :"Sign In"}
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item xs>
                  {!isSignup && (
                    <Link href="#" variant="body2">
                    Forgot password?
                    </Link>
                  )}
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" onClick={switchMode}>
                    {isSignup
                      ? "Already have an account? Sign in"
                      : "Don't have an account? Sign on"
                    }
                  </Link>
                </Grid>
              </Grid>
          </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  </ThemeProvider>
  )
}

export default Auth
