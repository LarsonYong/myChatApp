import './App.css';
import {Auth} from './components'

const authToken = false;


const App = () => {

  if(!authToken) return <Auth />

  return (
    <div>
      <h1>This is a chat app</h1>
    </div>
  );
}

export default App;
