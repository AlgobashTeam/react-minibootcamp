import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import BlogView from './pages/BlogView';
import BlogList from './pages/BlogList';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/blog/:id">
            <BlogView />
          </Route>
          <Route exact path="/blog">
            <BlogList />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
