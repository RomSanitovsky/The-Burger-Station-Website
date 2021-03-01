import BackToTop from './components/web-sections/back-top';
import SignIn from './components/authentication/sign-in';
import Footer from './components/web-sections/footer';
import MainPage from './main-page';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './components/authentication/sign-up';
import CreateMenuItem from './components/menu/create-menu-item';
import EditMenuItem from './components/menu/edit-menu-item';
import EditUser from './components/user/edit-user';
import EditBranchItem from './components/branch/edit-branch-item';
import CreateBranchItem from './components/branch/create-branch-item';


export default function App() {
  return (
    <dev>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/signin/" component={SignIn} />
          <Route path="/signup/" component={SignUp} />
          <Route path="/createitem/" component={CreateMenuItem} />
          <Route path="/edititem/:id/:name/:price/:type" component={EditMenuItem} />
          <Route path="/edituser/" component={EditUser} />
          <Route path="/edititem/" component={EditMenuItem} />
          <Route path="/editbranch/" component={EditBranchItem} />
          <Route path="/createbranch/" component={CreateBranchItem} />
        </Switch>
        <Footer />
        <BackToTop />
      </BrowserRouter>
    </dev>
  );
}