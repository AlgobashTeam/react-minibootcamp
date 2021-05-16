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
import CreateBlog from './pages/CreateBlog';
import EditBlog from './pages/EditBlog';
import AddUser from "./pages/AddUser";
import Random from "./pages/Random";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/random">
            <Random />
          </Route>
          <Route exact path="/user/create">
            <AddUser />
          </Route>
          <Route exact path="/blog/edit/:id">
            <EditBlog />
          </Route>
          <Route exact path="/blog/create">
            <CreateBlog />
          </Route>
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
