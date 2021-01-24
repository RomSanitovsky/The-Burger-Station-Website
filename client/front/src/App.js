import Branch from './components/branch';
import BackToTop from './components/back-top';
import Login from './components/login';
import Menu from './components/menu';
import Footer from './components/footer';
import MainPage from './main-page';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';


export default function App() {
  return (
    <dev>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/menu" component={Menu} />
          <Route path="/branches"  component={Branch} />
          <Route path="/login/"  component={Login} />
        </Switch>
        <Footer />
        <BackToTop />
      </BrowserRouter>
    </dev>
  );
}