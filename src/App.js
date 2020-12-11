import './App.css';
import Homepage from './components/homepage/Homepage'
import WatchVideo from './components/watchvideo/WatchVideo'
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Switch>
          <Route path ="/homepage" component = {Homepage} />
          <Route path ="/watch" component = {WatchVideo} />
          <Route path ="/" component = {Homepage} />
      </Switch>
    </div>
  );
}

export default App;
