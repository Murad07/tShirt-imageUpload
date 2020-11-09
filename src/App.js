import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ImageUpload from './components/ImageUpload/ImageUpload';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Tshirt from './components/Tshirt/Tshirt';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Router>
        <Switch>
          <Route path="/imageUpload">
            <ImageUpload></ImageUpload>
          </Route>
          <Route path="/t-shirt">
            <Tshirt></Tshirt>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
