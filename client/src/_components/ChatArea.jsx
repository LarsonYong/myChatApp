import React,  {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';



export class ChatArea extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  componentWillUpdate() {
  }
  render () {
    return (
      <Box style={{height: '100%', width: '100%'}}>
        <Box  style={{height: '12.5%', width: '100%'}}>
          <Typography align='center'>  This is search bar </Typography>
        </Box>
        <Divider />
        <Grid  style={{height: '87.5%', width: '100%'}}>
            <Grid container style={{padding: '20px',height:'81.5%'}}>

            </Grid>
            <Grid  container style={{padding: '20px', height: '18.5%'}}>
              <Grid item xs={11}>
                  <TextField multiline rows={2} defaultValue={"Line1\nLine2"} label="Type Something" fullWidth />
              </Grid>
              <Grid xs={1} align="right">
                  <Fab color="primary" aria-label="add"><SendIcon /></Fab>
              </Grid>
          </Grid>
        </Grid>
        <Divider />
      </Box>
    )
  }
}
