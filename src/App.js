import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/home';
import AdminLoginPage from './components/adminLogin';
import UserLoginPage from './components/userLogin';
import AdminPortalPage from './components/adminPortal';
import UserPortalPage from './components/userPortal';
import BookForm from './components/booksForm';
import UserForm from './components/usersForm';
import NewBooks from './components/newBooks';
import UserList from './components/userList';
import Booklist from './components/booklist';
import FavoriteBooks from './components/favouritebooks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"> <Homepage /> </Route>
          <Route exact path="/AdminLoginPage"> <AdminLoginPage /> </Route>
          <Route exact path="/UserLoginPage"> <UserLoginPage /> </Route>
          <Route exact path="/AdminPortalPage"> <AdminPortalPage /> </Route>
          <Route exact path="/UserPortalPage"> <UserPortalPage /></Route>
          <Route exact path="/BookForm"><BookForm /></Route>
          <Route exact path="/UserForm"><UserForm /></Route>
          <Route exact path="/NewBooks"><NewBooks /></Route>
          <Route exact path="/UserList"><UserList /></Route>
          <Route exact path="/Booklist"><Booklist /></Route>
          <Route exact path="/FavouriteBooks"><FavoriteBooks /></Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
