import About from "./components/web-sections/about";
import BookTable from "./components/web-sections/book-table";
import Staff from "./components/web-sections/staff";
import Contact from "./components/web-sections/contact";
import Gallery from "./components/web-sections/gallery";
import Hero from "./components/web-sections/hero";
import Menu from "./components/menu/menu";
import Branch from "./components/branch/branch";
import WhyUs from "./components/web-sections/why-us";
import Header from "./components/web-sections/header";
import TopBar from "./components/web-sections/top-bar";

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
        <Gallery />
        <Staff />
        <Contact />
      </main>
    </dev>
  );
}

export default MainPage;
