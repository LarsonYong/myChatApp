import React,  {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InterestsTwoToneIcon from '@mui/icons-material/InterestsTwoTone';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';

const logout = () => {
  localStorage.removeItem('token');
    console.log(localStorage.getItem('token'))
    window.location.reload();

}


export class SideBar extends React.Component {


  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  componentWillUpdate() {
  }

  render() {
    return (
      <Box>
        <Box height="100vh" display="flex" flexDirection="column">
          <Box sx={{ m: 1.5, mt:'60px',mb:'30px' }}>
            <img src={process.env.PUBLIC_URL + '/telegram2.png'} style={{
                width: '55px',
                height:'55px',
                color: '#fbfbfb'
              }}/>
          </Box>
          <Button sx={{height: 80, width: 80}} style={{maxWidth: '100px', maxHeight: '100px',
              minWidth: '50px',
              minHeight: '50px'
            }}>
            <DashboardIcon style={{color: '#fbfbfb', fontSize:"30px"}}/>
          </Button>
          <Button sx={{height: 80, width: 80}} style={{maxWidth: '100px', maxHeight: '100px',
              minWidth: '50px',
              minHeight: '50px'
            }}>
            <AccountBoxIcon style={{color: '#fbfbfb', fontSize:"30px"}}/>
          </Button>
          <Button sx={{height: 80, width: 80}} style={{maxWidth: '100px', maxHeight: '100px',
              minWidth: '50px',
              minHeight: '50px'
            }}>
            <EmailIcon style={{color: '#fbfbfb', fontSize:"30px"}}/>
          </Button>
          <Button sx={{height: 80, width: 80}} style={{maxWidth: '100px', maxHeight: '100px',
              minWidth: '50px',
              minHeight: '50px'
            }}>
            <SettingsIcon style={{color: '#fbfbfb', fontSize:"30px"}}/>
          </Button>
        </Box>

        <Box position="absolute" bottom="20px">
          <Button sx={{height: 80, width: 80}} style={{maxWidth: '100px', maxHeight: '100px',
              minWidth: '50px',
              minHeight: '50px'
            }}>
            <ExitToAppIcon onClick={logout} style={{color: '#fbfbfb', fontSize:"30px"}}/>
          </Button>
        </Box>
      </Box>
    )
  }
}

// <div>
//   <Button
//     type="submit"
//     fullWidth
//     sx={{ mt: 3, mb: 2 }}
//     variant="contained"
//   >
//     Home
//   </Button>
//   <LogoutOutlinedIcon onClick={logout} />
// </div>
