import './App.css';
import {Auth} from './_components'
import Button from '@mui/material/Button';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MuiDrawer from '@mui/material/Drawer';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';

import {userService} from './_services';
import {ChatArea} from './_components/ChatArea'
import {SideBar} from './_components/SideBar'


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

const authToken = localStorage.getItem('token');
const Authentication = () => {
  const token = localStorage.getItem('token')


}
const logout = () => {
  localStorage.removeItem('token');
    console.log(localStorage.getItem('token'))
    window.location.reload();

}

const mdTheme = createTheme();

const App = () => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  if(!authToken) return <Auth />

  return (
      <div>
        <div style={{height: '100vh', width:'100%', backgroundColor:'#ffffff', display:'flex'}}>
          <Box style={{backgroundColor: '#258c5f',height: '100%', width:'80px'}}>
            <SideBar />
          </Box>
          <Box  style={{backgroundColor:'#fbfbfb', height:'100%', width:'15.5%', ml:'80px'}}>
            <Typography align='center'>  This is Friend window</Typography>
          </Box>
          <Divider />
          <Box style={{backgroundColor:'#ffffff', height:'100%', width:'61%', ml:'80px'}}>
            <ChatArea />
          </Box>
          <Divider />
          <Box sx={{ border: 1}} style={{backgroundColor:'#ffffff', height:'100%', width:'23%', ml:'80px'}}>
            <Typography align='center'>  This is Other window</Typography>
          </Box>
        </div>
      </div>
  )
}

export default App;
