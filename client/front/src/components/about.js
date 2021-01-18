export default function About() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <div className="about-img">
              <img src="assets/img/about.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>
              The best restaurant to go to in Israel is The Burger Station
            </h3>
            <p className="font-italic">
              A new burger bar, a place that brings with it a different level.
              Premium hamburger with selected fresh meat that is ground on the
              spot every day, without manners, without filters, just eat...
            </p>
            <ul>
              <li>
                <i className="icofont-check-circled" /> Fresh ingredients every
                day.
              </li>
              <li>
                <i className="icofont-check-circled" /> Original dishes,
                toppings that will amaze you!
              </li>
              <li>
                <i className="icofont-check-circled" /> Closer to you than ever,
                look for the branch closest to your home!
              </li>
            </ul>
            <p>
              At Burger Station, our mission is simple: enhance and educate the
              palate with the freshest ingredients and flavors, while surprising
              and exciting each guest with personal care and service. For us,
              sustainability is not a lofty idea but a fundamental, and
              necessary, endeavor. Our concept is about the food and drink of
              course, but it’s also about our team, our facilities, our
              practices, and the hundreds of decisions we make each day that
              affect the world around us. We believe it’s about finding a
              balance, which allows us to sustain our quest of making quality,
              accessible food, while also giving back to our community and the
              environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
