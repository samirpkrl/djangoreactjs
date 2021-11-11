import logo from './logo.svg';
import './App.css';
import {Dropdown,DropdownButton} from 'react-bootstrap';

import {Home} from './Home';
import {department} from './department';
import {employee} from './employee';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
function App() {
  return (
  <BrowserRouter>
    <div className="container">
      <h3 className="m-3 d-flex justify-content-center"> Welcome!! to react</h3>
	  <DropdownButton id="dropdown-item-button" title="Dropdown button">
			<Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
			<Dropdown.Item as="button">Action</Dropdown.Item>
			<Dropdown.Item as="button">Another action</Dropdown.Item>
			<Dropdown.Item as="button">Something else</Dropdown.Item>
	    </DropdownButton>
	  <Navigation/>
	  
	  <Switch>
		<Route path='/' component={Home} exact/>
		<Route path='/department' component={department} />
		<Route path='/employee' component={employee} />
		
	  </Switch> 
    </div>
	</BrowserRouter>
  );
}

export default App;
