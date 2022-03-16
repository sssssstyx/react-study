import './App.css';
import Index from './pages/index';
import { Swwitch,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Switch>
        <Router path="/" exacxt component={Index} />
      </Switch>
    </div>
  );
}

export default App;
