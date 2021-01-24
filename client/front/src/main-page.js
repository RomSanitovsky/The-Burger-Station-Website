import About from './components/about';
import BookTable from './components/book-table';
import Staff from './components/staff';
import Contact from './components/contact';
import Gallery from './components/gallery';
import Hero from './components/hero';
import Menu from './components/menu';
import Branch from './components/branch';
import Testimonials from './components/testimonials';
import WhyUs from './components/why-us';
import Header from './components/header';
import TopBar from './components/top-bar';

function MainPage() {
  return (
    <dev>
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
        <Staff />
        <Contact />
      </main>
    </dev>
  );
}

export default MainPage;
