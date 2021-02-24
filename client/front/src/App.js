import BackToTop from './components/web-sections/back-top';
import SignIn from './components/authentication/sign-in';
import Footer from './components/web-sections/footer';
import MainPage from './main-page';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './components/authentication/sign-up';


export default function App() {
  return (
    <dev>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/signin/" component={SignIn} />
          <Route path="/signup/" component={SignUp} />
        </Switch>
        <Footer />
        <BackToTop />
      </BrowserRouter>
    </dev>
  );
}