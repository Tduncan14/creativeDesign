import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Header from './components/Headers';

function App() {
  return (
   <div class="container">
     <Router>
     <Header />


     </Router>
   </div>
  );
}

export default App;
