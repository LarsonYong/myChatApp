import './App.css';
import {Auth} from './_components'
import Button from '@mui/material/Button';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const authToken = localStorage.getItem('token');
const logout = () => {
  localStorage.removeItem('token');
    console.log(localStorage.getItem('token'))
  window.location.reload();

}

const App = () => {

  if(!authToken) return <Auth />

  return (
    <div>
      <Button
        type="submit"
        fullWidth
        sx={{ mt: 3, mb: 2 }}
        variant="contained"
      >
        Home
      </Button>
      <LogoutOutlinedIcon onClick={logout} />
    </div>
  );
}

export default App;
