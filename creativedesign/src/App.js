import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Header from './components/Headers';
import Customers from './components/Customers';
import Team from './components/Team';

function App() {
  return (
   <div class="container">
     <Router>
     <Header />
     </Router>
     <Customers/>
      <Team /> 

 

   </div>
  );
}

export default App;
