import './App.css';
import About from './components/about';
import BacktoTop from './components/backtop';
import Booktable from './components/booktable';
import Chefs from './components/chefs';
import Contact from './components/contact';
import Events from './components/events';
import Footer from './components/footer';
import Gallery from './components/gallery';
import Header from './components/header';
import Hero from './components/hero';
import Menu from './components/menu';
import Specials from './components/specials';
import Testimonials from './components/testimonials';
import Topbar from './components/topbar';
import Whyus from './components/whyus';
import {BrowserRouter, Link, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Whyus />
        <Menu />
        <Specials />
        <Events />
        <Booktable />
        <Testimonials />
        <Gallery />
        <Chefs />
        <Contact />
      </main>
      <Footer />
      <BacktoTop />

    </BrowserRouter>
  );
}

export default App;
