import './App.css';
import About from './components/about';
import BackToTop from './components/back-top';
import BookTable from './components/book-table';
import Stuff from './components/stuff';
import Contact from './components/contact';
import Footer from './components/footer';
import Gallery from './components/gallery';
import Header from './components/header';
import Hero from './components/hero';
import Menu from './components/menu';
import Branch from './components/branch';
import Testimonials from './components/testimonials';
import TopBar from './components/top-bar';
import WhyUs from './components/why-us';
import {BrowserRouter, Link, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Menu />
        <WhyUs />
        <Branch />
        <BookTable />
        <Testimonials />
        <Gallery />
        <Stuff />
        <Contact />
      </main>
      <Footer />
      <BackToTop />

    </BrowserRouter>
  );
}

export default App;
